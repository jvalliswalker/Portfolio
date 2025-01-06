import { useOutletContext } from "react-router";

function Contact() {
  const [styleHandler] = useOutletContext();

  function navigateTo(url) {
    window.open(url, "_blank").focus();
  }

  return (
    <div>
      <h2 className={styleHandler.underlinedHeader}>Let's Get In Touch</h2>
      <div className="mb-3">
        <p className="mb-5">
          Thanks so much for your interest. Below are links to my sites and my
          resume.
        </p>
        <div className="row">
          <div className={styleHandler.siteWrapper}>
            <div
              className={styleHandler.iconWrapper}
              onClick={() =>
                navigateTo(
                  "https://www.linkedin.com/in/jamil-vallis-walker-43706a60/"
                )
              }
            >
              <img
                src="/images/icon-linkedin-blue.png"
                alt="Blue Linkedin Icon"
                className="icon-linkedin-blue mb-2"
              />
              <div>LinkedIn</div>
            </div>
          </div>
          <div className={styleHandler.siteWrapper}>
            <div
              className={styleHandler.iconWrapper}
              onClick={() => navigateTo("https://github.com/jvalliswalker")}
            >
              <img
                src="/images/icon-github.png"
                className="icon-linkedin-blue mb-2"
              />
              <div>Github</div>
            </div>
          </div>
          <div className={styleHandler.siteWrapper}>
            <div
              className={styleHandler.iconWrapper}
              onClick={() =>
                navigateTo("/resume/Resume%20-%20J%2E%20Vallis-Walker.pdf")
              }
            >
              <img src="/images/icon-resume.png" className="icon-resume mb-1" />
              <div>Resume PDF</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
