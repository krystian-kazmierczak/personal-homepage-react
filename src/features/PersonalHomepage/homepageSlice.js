import { createSlice } from "@reduxjs/toolkit";

const homePageSlice = createSlice({
  name: "personalHomepage",
  initialState: {
    repositories: null,
    status: "initial",
  },
  reducers: {
    fetchRepositories: () => ({
      status: "loading",
      repositories: null,
    }),
    fetchRepositoriesSuccess: (_, { payload: repositories }) => ({
      status: "success",
      repositories,
    }),
    fetchRepositoriesError: () => ({
      status: "error",
      repositories: null,
    }),
  },
});

export const {
  fetchRepositories,
  fetchRepositoriesSuccess,
  fetchRepositoriesError,
} = homePageSlice.actions;

const selectHomepageState = (state) => state.personalHomepage;

export const selectRepositories = (state) =>
  selectHomepageState(state).repositories;
export const selectRepositoriesStatus = (state) =>
  selectHomepageState(state).status;
export default homePageSlice.reducer;
