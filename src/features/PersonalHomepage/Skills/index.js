import { Section, List, Item, Title } from "./styled";

export const Skills = ({ title, skills }) => (
  <Section>
    <Title>{title}</Title>
    <List>
      {skills.map((skill) => (
        <Item key={skill}>{skill}</Item>
      ))}
    </List>
  </Section>
);
