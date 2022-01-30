import { githubUserName } from "./../../githubUserName";
import { Header, Paragraph, Wrapper, ButtonLink } from "./styled";
import { ReactComponent as WarningIcon } from "./warning.svg";

export const ErrorBox = () => (
  <Wrapper>
    <WarningIcon />
    <Header>Oooops! Something went wrong...</Header>
    <Paragraph>
      Sorry, failed to load HitHub projects. <br />
      You can check them directly on GitHub
    </Paragraph>
    <ButtonLink href={`https://github.com/${githubUserName}`} target="_blank">
      Go to GitHub
    </ButtonLink>
  </Wrapper>
);
