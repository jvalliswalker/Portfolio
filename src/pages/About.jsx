import "../styles/index.css";
import "../styles/contact.css";
import { useOutletContext } from "react-router";

function About() {
  const [mediaQueries] = useOutletContext();

  return (
    <div>
      <div className="container">
        <div className={mediaQueries.aboutHeadshotStyling}>
          <img src="/images/headshot.png" className="nameplateImage" />
        </div>
        <div className={mediaQueries.aboutTextStyling}>
          <p>
            <span className="fw-bolder">Hi there!</span> My name is Jamil
            Vallis-Walker. I'm a full time developer and long time tech
            tinkerer. I've been coding in Python and Apex for over five years,
            and I've just finished a six month course in web development (MERN)
            through UC Berkeley Extension. I'm excited to take the next step in
            my career and get started with this new skill set.
          </p>
          <p>
            This site is a portfolio of the projects I've done during my time in
            the UC Berkeley program. Take a look around, and feel free to reach
            out via the Contact page if you'd like to connect.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
