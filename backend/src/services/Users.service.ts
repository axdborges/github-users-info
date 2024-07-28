import axios from "axios";

export default class UsersService {
  static async listUsers(since: string) {
    const response = await axios.get(
      `https://api.github.com/users?since=${since}`,
      // { headers },
    );

    const finalResponse = {
      link: response.headers.link,
      users: response.data,
    };

    return finalResponse;
  }

  static async userDetails(username: string) {
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
      // { headers },
    );

    return response.data;
  }

  static async userRepos(username: string) {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`,
      // { headers },
    );

    return response.data;
  }
}
