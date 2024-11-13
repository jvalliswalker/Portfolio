import Project from "../components/Project.jsx";

const projects = [
  <Project
    key="c2"
    img="\images\project-profile.png"
    title="Profile Site"
    url="https://jvalliswalker.github.io/C2-Profile/"
    github="https://github.com/jvalliswalker/C2-Profile"
  />,
];

function Portfolio() {
  return <div>{projects.map((project) => project)}</div>;
}

export default Portfolio;
