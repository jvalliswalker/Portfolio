import Project from "../components/Project.jsx";
import { useOutletContext } from "react-router";

function Portfolio() {
  const [styleHandler] = useOutletContext();

  const projects = [
    <Project
      key="p2"
      img="\images\project-p2-2.png"
      title="Digidex"
      url="https://p2-digidex-in6j.onrender.com/"
      github="https://github.com/UCBX-2024-Team-Wombat/P2-Digidex"
      styling={styleHandler}
    />,
    <Project
      key="css"
      img="\images\project-css-demo.png"
      title="CSS Walkthrough"
      url="https://jvalliswalker.github.io/css-teaching-demo/"
      github="https://github.com/jvalliswalker/css-teaching-demo"
      styling={styleHandler}
    />,
    <Project
      key="c2"
      img="\images\project-c2.png"
      title="LinkedIn-alike"
      url="https://jvalliswalker.github.io/C2-Profile/"
      github="https://github.com/jvalliswalker/C2-Profile"
      styling={styleHandler}
    />,
    <Project
      key="c14"
      img="\images\project-c14.png"
      title="Tech Blog"
      url="https://c14-tech-blog.onrender.com/"
      github="https://github.com/jvalliswalker/C14-Tech-Blog"
      styling={styleHandler}
    />,
    <Project
      key="p1"
      img="\images\project-p1.png"
      title="WordNerd"
      url="https://ucbx-2024-team-wombat.github.io/WordNerd/"
      github="https://github.com/UCBX-2024-Team-Wombat/WordNerd"
      styling={styleHandler}
    />,
    <Project
      key="c4"
      img="\images\project-c4.png"
      title="My First Blog"
      url="https://jvalliswalker.github.io/C4-Blog/index.html"
      github="https://github.com/jvalliswalker/C4-Blog"
      styling={styleHandler}
    />,
  ];

  const mobileDisplay = (
    <div>
      {projects.map((project) => {
        return (
          <div className="pb-4" key={project.key}>
            {project}
          </div>
        );
      })}
    </div>
  );

  const tabletDisplay = (
    <div className="container">
      <div className="row">
        {projects.map((project) => {
          return (
            <div className="pb-4 col-6" key={project.key}>
              {project}
            </div>
          );
        })}
      </div>
    </div>
  );

  const desktopDisplay = (
    <div className="container">
      <div className="row">
        {projects.map((project) => {
          return (
            <div className="pb-4 col-4" key={project.key}>
              {project}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div>
      {styleHandler.isMobile ? mobileDisplay : null}
      {!styleHandler.isMobile ? tabletDisplay : null}
    </div>
  );
}

export default Portfolio;
