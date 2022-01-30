import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Content } from "./Content";
import { Section, Header, StyledGithubIcon, SubTitle } from "./styled";
import { Title } from "./../Skills/styled";
import { githubUserName } from "./githubUserName";
import {
  fetchRepositories,
  selectRepositories,
  selectRepositoriesStatus,
} from "./../homepageSlice";

export const Portfolio = () => {
  const dispatch = useDispatch();

  const repositoriesStatus = useSelector(selectRepositoriesStatus);
  const repositories = useSelector(selectRepositories);

  useEffect(() => {
    dispatch(fetchRepositories(githubUserName));
  }, [dispatch]);

  return (
    <Section>
      <Header>
        <StyledGithubIcon />
        <Title>Portflio</Title>
        <SubTitle>My recent projects</SubTitle>
      </Header>
      <Content status={repositoriesStatus} repositories={repositories} />
    </Section>
  );
};
