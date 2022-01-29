import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as LinkedinIcon } from "./icons/linkedin.svg";

export const socialWebSites = [
  {
    name: "Github",
    url: "https://github.com/krystian-kazmierczak",
    Icon: styleIcon(GithubIcon),
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/krystian-ka%C5%BAmierczak-46b248207/",
    Icon: styleIcon(LinkedinIcon),
  },
];
