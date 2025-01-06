import "../../styles/index.css";
import "../../styles/contact.css";
import { useOutletContext } from "react-router";

function Landing() {
  const [styleHandler] = useOutletContext();
  const style = styleHandler.landing;

  return (
    <div>
      <div className={`container ${style.mainContainerStyling}`}>
        <div className={style.headshotStyling}>
          <img
            src="/images/headshot.png"
            className="nameplateImage custom-shadow"
          />
        </div>
        <div className={style.textStyling}>
          <p>
            <span className="fw-bolder">Hi there!</span> My name is Jamil
            Vallis-Walker. I'm a full time developer and long time tech
            tinkerer. I've been coding in Python and Apex for over five years,
            and I've just finished a six month course in web development (MERN)
            through UC Berkeley Extension. I'm excited to take the next step in
            my career and get started building fun and useful new web
            applications.
          </p>
          <p>
            This site is a portfolio of my personal and professional development
            projects. Take a look around, and if you'd like to get in touch
            please message me on{" "}
            <a
              href="https://www.linkedin.com/in/jamil-vallis-walker-43706a60/"
              target="_blank"
            >
              LinkedIn
            </a>{" "}
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
