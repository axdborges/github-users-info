export type RoutesConfig = {
  path: string;
  element: React.ReactNode;
  children?: { path: string; element: React.ReactNode }[];
};

export type usersResponse = {
  login: string;
  id: number;
  url: string;
  avatar_url: string;
  type: string;
  repos_url: string;
};

export type RepoResponse = {
  id: string;
  name: string;
  html_url: string;
  created_at: string;
};