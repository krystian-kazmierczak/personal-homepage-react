import { Section, Header, StyledGithubIcon, SubTitle } from "./styled";
import { Title } from "./../Skills/styled";
import { ErrorBox } from "./Content/ErrorBox";
import { Loading } from "./Content/Loading";

export const Portfolio = () => {
  return (
    <Section>
      <Header>
        <StyledGithubIcon />
        <Title>Portfolio</Title>
        <SubTitle>My recent projects</SubTitle>
      </Header>
      <ErrorBox />
      <Loading />
    </Section>
  );
};
