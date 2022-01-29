import profile from "./profile.jpg";
import { email } from "./../email";
import {
  Wrapper,
  Images,
  Iam,
  Name,
  Description,
  Summary,
  ButtonIcon,
  StyledButton,
} from "./styled";

export const Header = () => (
  <Wrapper>
    <Images src={profile} alt="Krystian Kaźmierczak" />
    <Description>
      <Iam>I'm</Iam>
      <Name>Krystian Kaźmierczak</Name>
      <Summary>
        👨🏻‍💻 Hi! I’m a begining Frontend Developer mostly using React to run my
        projects. Currently I'm looking for new job opportunities, so if you
        like my work don't hesitate to contact me!
      </Summary>
      <StyledButton href={`mailto:${email}`} title={email}>
        <ButtonIcon />
        Hire me
      </StyledButton>
    </Description>
  </Wrapper>
);
