import {
  ApolloClient,
  ApolloLink,
  concat,
  createHttpLink,
  gql,
  InMemoryCache,
} from '@apollo/client';
import { getAccessToken } from '../auth';

const httpLink = createHttpLink({ uri: 'http://localhost:9000/graphql' });

const authLink = new ApolloLink((operation, forward) => {
  const accessToken = getAccessToken();
  if (accessToken) {
    operation.setContext({
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  }
  return forward(operation);
});

const apolloClient = new ApolloClient({
  link: concat(authLink, httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true,
  /* defaultOptions: {
    query: {
      fetchPolicy: 'network-only'
    },
    watchQuery: {
      fetchPolicy: 'network-only'
    }
  } */
});

const jobDetailFragment = gql`
  fragment JobDetail on Job {
      id
      date
      title
      description
      company {
        id
        name
      }
  }
`;

const jobByIdQuery = gql`
    query JobById($id: ID!) {
      job(id: $id) {
        ...JobDetail
      }
    }
${jobDetailFragment}
  `;

export async function createJob({ title, description }) {
  const mutation = gql`
    mutation CreateJob($input: CreateJobInput!) {
      job: createJob(input: $input) {
        id
        date
        title
        company {
          id
          name
        }
        description
      }
    }
  `;

  const {
    data: { job },
  } = await apolloClient.mutate({
    mutation,
    variables: {
      input: { title, description },
    },
    update: (cache, { data }) => {
      cache.writeQuery({
        query: jobByIdQuery,
        variables: { id: data.job.id },
        data
      })
    }
  });
  return job;
}

export async function getJobs() {
  const query = gql`
    query {
      jobs {
        ...JobDetail
      }
    }
    ${jobDetailFragment}
  `;

  const {
    data: { jobs },
  } = await apolloClient.query({
    query,
    fetchPolicy: "network-only"
  });
  return jobs;
}

export async function getJob(id) {

  const {
    data: { job },
  } = await apolloClient.query({ query: jobByIdQuery, variables: { id } });
  return job;
}

export async function getCompany(id) {
  const query = gql`
    query CompanyById($id: ID!) {
      company(id: $id) {
        id
        name
        description
        jobs {
          id
          title
          date
          company {
            name
          }
        }
      }
    }
  `;

  const {
    data: { company },
  } = await apolloClient.query({ query, variables: { id } });
  return company;
}
