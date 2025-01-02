import { useOutletContext } from "react-router";

function Resume() {
  const [styleHandler] = useOutletContext();
  const style = styleHandler.resumeStyleHandler;

  function navigateTo(url) {
    window.open(url, "_blank").focus();
  }

  return (
    <div>
      <h2 className={styleHandler.underlinedHeader}>Sites & Resources</h2>
      <div className="mb-3">
        <p>
          Thanks so much for your interest. Here are links to my sites and
          resume.
        </p>
        <div className="row">
          <div className={style.siteWrapper}>
            <div
              className={style.iconWrapper}
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
          <div className={style.siteWrapper}>
            <div
              className={style.iconWrapper}
              onClick={() => navigateTo("https://github.com/jvalliswalker")}
            >
              <img
                src="/images/icon-github.png"
                className="icon-linkedin-blue mb-2"
              />
              <div>Github</div>
            </div>
          </div>
          <div className={style.siteWrapper}>
            <div
              className={style.iconWrapper}
              onClick={() =>
                navigateTo("/resume/Resume%20-%20J%2E%20Vallis-Walker.pdf")
              }
            >
              <img src="/images/icon-resume.png" className="icon-resume mb-1" />
              <div>Resume PDF</div>
            </div>
          </div>
        </div>
        <p></p>
        <p>
          In addition to these resources, I've also listed out some additional
          information about my work relevant skills and experience in the
          sections below.
        </p>
      </div>
      <div>
        <h2 className={styleHandler.underlinedHeader}>Technical Skills</h2>
        <div className="row">
          <h5>Primary Coding Languages</h5>
          <div className="col">
            <ul>
              <li>JavaScript</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="col">
            <ul className="col">
              <li>Apex (Java)</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          {styleHandler.isMobile ? <></> : <div className="col"></div>}
        </div>
        <div>
          <h5 className="mb-3">Frameworks / Libraries</h5>
          <div className="row">
            <div className={styleHandler.isMobile ? "" : "col"}>
              <div className="fst-italic">JavaScript/Web Development</div>
              <ul>
                <li>React</li>
                <li>Express</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div className={styleHandler.isMobile ? "" : "col"}>
              <div className="fst-italic">Python</div>
              <ul>
                <li>Simple Salesforce API</li>
                <li>Pandas</li>
                <li>NumPy</li>
              </ul>
            </div>
            <div className={styleHandler.isMobile ? "" : "col"}>
              <div className="fst-italic">Salesforce</div>
              <ul>
                <li>Lightning Web Components</li>
                <li>Sales, Service, and CPQ Clouds</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className={styleHandler.underlinedHeader}>Project Management</h2>
        <div>
          <p>
            At the{" "}
            <span>
              <a
                href="https://www.linkedin.com/company/making-waves-foundation/posts/?feedView=all"
                target="_blank"
              >
                Making Waves Foundation
              </a>{" "}
            </span>
            I lead interdepartmental meetings with two separate groups to
            discuss new and ongoing technical projects.
          </p>
          <p>
            One group was made up of several "power users" (non-developer but
            more technically minded staff) from each of the program's
            departments. Together we would discuss and triage new requests from
            their respective departments, clarify requirments, and get feedback
            for in-flight projects.
          </p>
          <p>
            The other group was made up of leadership members of the programs'
            various departments. Here we would introduce, refine, and triage
            initiative-level projects as well as demo projects ready for final
            approval.{" "}
          </p>
          <p>
            At {""}
            <a
              href="https://www.linkedin.com/company/sambasafety/"
              target="_blank"
            >
              SambaSafety
            </a>{" "}
            I've continued to be involved in the requirment gathering, QA, and
            User Acceptance Testing aspects of the development process.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
