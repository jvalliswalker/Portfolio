import Project from "../../components/Project.jsx";
import { useOutletContext } from "react-router";

function Portfolio() {
  const [styleHandler] = useOutletContext();
  const style = styleHandler.portfolio;

  const courseProjects = [
    <Project
      key="p3"
      img="\images\skill-share-hub.png"
      title="Skill Share Hub"
      url="https://skillhub-uvg0.onrender.com/"
      github="https://github.com/UCBX-2024-Team-Wombat/Skill-Share-Hub"
      styling={styleHandler}
      description="A platform for skilled people to trade what they know for what they're excited to learn"
    />,
    <Project
      key="p2"
      img="\images\project-p2-2.png"
      title="Digidex"
      url="https://p2-digidex-in6j.onrender.com/"
      github="https://github.com/UCBX-2024-Team-Wombat/P2-Digidex"
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
  ];

  const microBuilds = [
    <Project
      key="css"
      img="\images\project-css-demo.png"
      title="CSS Walkthrough"
      url="https://jvalliswalker.github.io/css-teaching-demo/"
      github="https://github.com/jvalliswalker/css-teaching-demo"
      styling={styleHandler}
    />,
  ];

  return (
    <div>
      <h2 className={style.projectTypeHeader}>
        UC Berkeley Web Development Projects
      </h2>
      <div>
        {courseProjects.map((project) => {
          return (
            <div className={style.columnStyling} key={project.key}>
              {project}
            </div>
          );
        })}
      </div>
      <h2 className={style.projectTypeHeader}>Micro Projects</h2>
      <div className="row">
        {microBuilds.map((project) => {
          return (
            <div className={style.columnStyling} key={project.key}>
              {project}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
