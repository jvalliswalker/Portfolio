import { useOutletContext } from "react-router";
import { Accordion } from "react-bootstrap";

function Resume() {
  const [styleHandler] = useOutletContext();

  const style = styleHandler.resumeStyleHandler;

  function navigateTo(url) {
    window.open(url, "_blank").focus();
  }

  function downloadResume() {
    window.location.assign("/resume/resume.pdf");
  }

  const skillsAndProficiences = (
    <>
      <div className="container">
        <div className="row">
          <div className={style.accordionColumnStyling}>
            <h6>Primary Coding Languages</h6>
            <ul>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Apex (Java)</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          <div className={style.accordionColumnStyling}>
            <h6 className="mb-2">Coding Frameworks / Libraries</h6>
            <div className="fst-italic">JavaScript/Web Development</div>
            <ul>
              <li>React</li>
              <li>Express</li>
              <li>Node</li>
            </ul>
            <div className="fst-italic">Python</div>
            <ul>
              <li>Simple Salesforce API</li>
              <li>Pandas</li>
              <li>NumPy</li>
            </ul>
            <div className="fst-italic">Salesforce</div>
            <ul>
              <li>Lightning Web Components</li>
              <li>Sales, Service, and CPQ Clouds</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );

  const projectsAndExperience = (
    <>
      <div className="container">
        <div className="row">
          <div className={style.accordionColumnStyling}>
            <h6>Development Experience</h6>
            <ul>
              <li>Create and refactor Saleforce record hooks/triggers</li>
              <li>
                Create custom user interfaces for department-specific needs
              </li>
              <li>
                Create Python and JavasScripts scripts for quick and reliable
                ETL (extract, transform, load) tasks
              </li>
            </ul>
          </div>
          <div className={style.accordionColumnStyling}>
            <h6>Projects / Notable Accomplishments</h6>
            <ul>
              <li>
                Transitioned company Salesforce Org from Classic to Lightning
              </li>
              <li>
                Transitioned company Salesforce Org from single (US) currency to
                multi-currency capability CPQ functionality
              </li>
              <li>
                Built a python-based desktop application to quickly construct
                and load CPQ Product Suites into Salesforce sandbox and
                production environments
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );

  const nonTechnical = (
    <>
      <h6>Project Management</h6>
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
        I lead interdepartmental meetings with two separate groups to discuss
        new and ongoing technical projects.
      </p>
      <p>
        One group was made up of several "power users" (non-developer but more
        technically minded staff) from each of the program's departments.
        Together we would discuss and triage new requests from their respective
        departments, clarify requirments, and get feedback for in-flight
        projects.
      </p>
      <p>
        The other group was made up of leadership members of the programs'
        various departments. Here we would introduce, refine, and triage
        initiative-level projects as well as demo projects ready for final
        approval.{" "}
      </p>
      <p>
        At {""}
        <a href="https://www.linkedin.com/company/sambasafety/" target="_blank">
          SambaSafety
        </a>{" "}
        I've continued to be involved in the requirment gathering, QA, and User
        Acceptance Testing aspects of the development process.{" "}
      </p>
    </>
  );

  return (
    <div>
      <div>
        <h2 className={styleHandler.underlinedHeader}>Sites & Resources</h2>
        <div className="mb-3">
          <p>
            Thanks so much for your interest! Here are links to my sites and
            resume.
          </p>
          <div className="row">
            <div
              className={style.siteWrapper}
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
            <div className={style.siteWrapper}>
              <img
                src="/images/icon-github.png"
                className="icon-linkedin-blue mb-2"
              />
              <div>Github</div>
            </div>
            <div
              className={style.siteWrapper}
              onClick={() =>
                navigateTo("/resume/Resume%20-%20J%2E%20Vallis-Walker.pdf")
              }
            >
              <img src="/images/icon-resume.png" className="icon-resume mb-1" />
              <div>Resume PDF</div>
            </div>
          </div>
          <p></p>
          <p>
            In addition to these resources, I've also listed out some additional
            information about my work relevant skills and experience in the
            sections below.
          </p>
        </div>
      </div>
      <div>
        <Accordion>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Technical Skills & Proficiencies
            </Accordion.Header>
            <Accordion.Body>{skillsAndProficiences}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Projects & Work Experience</Accordion.Header>
            <Accordion.Body>{projectsAndExperience}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Non-Technical Skills & Experience
            </Accordion.Header>
            <Accordion.Body>{nonTechnical}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default Resume;
