import api from "../services/api";
import { useQuery } from "@tanstack/react-query";

const listUsersSince = async (since?: number) => {
  const { data } = await api.get(`/users?since=${since || 0}`);
  return data;
};

const showUserDetails = async (username?: string) => {
  if (username) {
    const { data } = await api.get(`/users/${username}/details`);
    return data;
  }
};

const showUserRepos = async (username?: string) => {
  if (username) {
    const { data } = await api.get(`/users/${username}/repos`);
    return data;
  }
};

const useFetchUsersQuery = (since?: number, username?: string) => {
  const users = useQuery({
    queryKey: ["users-list", since],
    queryFn: () => listUsersSince(since),
    staleTime: 15 * 60 * 1000, // 15 mins
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const details = useQuery({
    queryKey: ["user-details", username],
    queryFn: () => showUserDetails(username),
    staleTime: 15 * 60 * 1000, // 15 mins
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const repos = useQuery({
    queryKey: ["user-repos", username],
    queryFn: () => showUserRepos(username),
    staleTime: 15 * 60 * 1000, // 15 mins
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    users: users.data,
    usersIsLoading: users.isLoading,

    details: details.data,
    detailsIsLoading: details.isLoading,

    repos: repos.data,
    reposIsLoading: repos.isLoading,
  };
};

export default useFetchUsersQuery;
