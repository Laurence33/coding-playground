import { useQuery } from "@apollo/client";
import { companyByIdQuery, jobByIdQuery } from "./queries";

export function useCompany(id) {
  const { data, loading, error } = useQuery(companyByIdQuery, { variables: { id } });
  return {
    company: data?.company, loading, error
  }
}

export function useJob(id) {
  const { data, loading, error } = useQuery(jobByIdQuery, { variables: { id } });
  return { job: data?.job, loading, error };
}
