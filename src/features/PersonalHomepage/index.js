import { Container } from "./styled";
import { Header } from "./Header";
import { Skills } from "./Skills";
import { skills, nextSkills } from "./skillsData";
import { Footer } from "./Footer";
import { Portfolio } from "./Portfolio";
import { ThemeSwitch } from "../../common/ThemeSwitch";

export const PersonalHomepage = () => (
  <Container>
    <ThemeSwitch />
    <Header />
    <Skills title={<>My skillset includes 🛠️</>} skills={skills} />
    <Skills title={<>What I want to learn next 🚀</>} skills={nextSkills} />
    <Portfolio />
    <Footer />
  </Container>
);
