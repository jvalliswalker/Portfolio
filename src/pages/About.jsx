import { useEffect, useState } from "react";
import "../index.css";
import { useOutletContext } from "react-router";

function About() {
  const [mediaQueries] = useOutletContext();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
  }, []);

  return (
    <div>
      <div>About Me content placeholder</div>
      <div>|{windowWidth}|</div>
      <div>{JSON.stringify(mediaQueries)}</div>
      {/* <div>|{`${isMobile}`}|</div>
      <div>|{`${isTablet}`}|</div>
      <div>|{`${isDesktop}`}|</div> */}
      <div>
        <img src="/images/headshot.png" className="nameplateImage" />
      </div>
    </div>
  );
}

export default About;
