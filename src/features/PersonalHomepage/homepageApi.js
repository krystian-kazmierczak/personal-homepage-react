import axios from "axios";

const githubApiBaseURL = "https://api.github.com";

export const getRepositories = (username) =>
  axios
    .get(`${githubApiBaseURL}/users/${username}/repos`)
    .then((response) => response.data);
