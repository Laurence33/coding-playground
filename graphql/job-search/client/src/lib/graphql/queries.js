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

export const apolloClient = new ApolloClient({
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

export const jobByIdQuery = gql`
    query JobById($id: ID!) {
      job(id: $id) {
        ...JobDetail
      }
    }
${jobDetailFragment}
  `;

export const companyByIdQuery = gql`
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


export const jobsQuery = gql`
    query {
      jobs {
        ...JobDetail
      }
    }
    ${jobDetailFragment}
  `;


export const createJobMutation = gql`
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

