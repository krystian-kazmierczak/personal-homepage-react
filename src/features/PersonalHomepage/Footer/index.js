import { email } from "../email";
import {
  Address,
  LetsTalk,
  EmailWrapper,
  EmailLink,
  Paragraph,
  Wrapper,
} from "./styled";
import { SocialIcons } from "./SocialIcons/index";

export const Footer = () => (
  <Wrapper>
    <LetsTalk>Let's talk!</LetsTalk>
    <Address>
      <EmailWrapper>
        <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
      </EmailWrapper>
      <Paragraph>
        I'm always open to new challenges. If you have a website in mind and
        need some help to make your ideas come to life, feel free to contact me 🤞
      </Paragraph>
      <SocialIcons />
    </Address>
  </Wrapper>
);
