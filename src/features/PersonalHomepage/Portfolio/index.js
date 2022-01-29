import { Section, Header, StyledGithubIcon, SubTitle } from "./styled";
import { Title } from "./../Skills/styled";

export const Portfolio = () => {

  return (
    <Section>
      <Header>
        <StyledGithubIcon />
        <Title>Portfolio</Title>
        <SubTitle>My recent projects</SubTitle>
      </Header>
    <div>Projects</div>
    </Section>
  );
};