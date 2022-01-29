import { Container } from "./styled";
import { Header } from "./Header";
import { Skills } from "./Skills";
import { skills, nextSkills } from "./skillsData";

export const PersonalHomepage = () => (
  <Container>
    <Header />
    <Skills title={<>My skillset includes ⚒️</>} skills={skills} />
    <Skills title={<>What I want to learn next 🚀</>} skills={nextSkills} />
  </Container>
);
