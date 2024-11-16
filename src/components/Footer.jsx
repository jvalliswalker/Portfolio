import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../styles/index.css";
import "../styles/footer.css";

function Footer({ styleHandler }) {
  function navigateTo(url) {
    window.open(url, "_blank").focus();
  }

  const githubUrl = "https://github.com/jvalliswalker";
  const linkedInUrl =
    "https://www.linkedin.com/in/jamil-vallis-walker-43706a60/";
  const stackoverflowUrl = "https://stackoverflow.com/users/8032508/jwok";

  const style = styleHandler.footer;

  return (
    <div className="customFooter">
      <Navbar className="primary-color-theme" fixed="bottom">
        <Container className="justify-content-center align-content-center">
          <div className="row gx-5">
            <div className="col">
              <img
                src="\images\icon-linkedin.png"
                alt="LinkedIn Icon"
                onClick={() => navigateTo(linkedInUrl)}
                className={style.iconStyling}
              />
            </div>
            <div className="col">
              <img
                src="\images\icon-github.png"
                alt="Github Icon"
                onClick={() => navigateTo(githubUrl)}
                className={style.iconStyling}
              />
            </div>
            <div className="col">
              <img
                src="\images\icon-stackoverflow.png"
                alt="Stack Overflow Icon"
                onClick={() => navigateTo(stackoverflowUrl)}
                className={style.iconStyling}
              />
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
