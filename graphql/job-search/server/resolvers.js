import {
  getJob,
  getJobsByCompany,
  getJobs,
  createJob,
  updateJob,
  deleteJob,
} from './db/jobs.js';
import { getCompanies, getCompany } from './db/companies.js';
import { GraphQLError } from 'graphql';
import { UnauthorizedError } from 'express-jwt';

export const resolvers = {
  Query: {
    jobs: () => getJobs(),
    companies: () => getCompanies(),
    job: async (_, { id }) => {
      const job = await getJob(id);
      if (!job) {
        throw notFoundError('No Job found with id ' + id);
      }
      return job;
    },
    company: async (_, { id }) => {
      const company = await getCompany(id);
      if (!company) {
        throw notFoundError('No Company found with id ' + id);
      }
      return company;
    },
  },
  Mutation: {
    createJob: (_root, { input: { title, description } }, { user }) => {
      if (!user) {
        throw unauthorizedError('missing authentication');
      }
      return createJob({ companyId: user.companyId, title, description });
    },
    updateJob: async (
      _root,
      { input: { id, title, description } },
      { user }
    ) => {
      if (!user) {
        throw unauthorizedError('missing authentication');
      }
      const job = await updateJob({
        companyId: user.companyId,
        id,
        title,
        description,
      });
      if (!job) {
        throw notFoundError('No Company found with id ' + id);
      }
      return job;
    },
    deleteJob: async (_root, { id }, { user }) => {
      console.log(user);
      if (!user) {
        throw unauthorizedError('missing authentication');
      }
      const job = await deleteJob(id, user.companyId);
      if (!job) {
        throw notFoundError('No Company found with id ' + id);
      }
      return job;
    },
  },
  Company: {
    jobs: (company) => getJobsByCompany(company.id),
  },
  Job: {
    date: (job) => toIsoDate(job.createdAt),
    company: (job) => getCompany(job.companyId),
  },
};

function toIsoDate(value) {
  return value.split('T')[0];
}
function notFoundError(message) {
  return new GraphQLError(message, {
    extensions: { code: 'NOT_FOUND' },
  });
}

function unauthorizedError(message) {
  return new GraphQLError(message, {
    extensions: { code: 'UNAUTHORIZED' },
  });
}
