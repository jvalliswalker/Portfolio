import SingleAccordion from "../components/SingleAccordion";
import { useOutletContext } from "react-router";

function Resume() {
  const [styleHandler] = useOutletContext();

  const style = styleHandler.resumeStyleHandler;

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
    <>
      <h6>Thanks for your interest!</h6>
      <div className="mb-3">
        <p>
          You can download a copy of my resume by{" "}
          <a href="https://drive.google.com/uc?export=download&id=10taFQdyCTgh81d3MzmV5yoNwwlvTcCWk">
            clicking here
          </a>
          . You can also visit my LinkedIn, Github, and Stack Overflow pages via
          the icons in the footer of this site.
        </p>
        <p>
          In addition to these resources, I've also listed out some additional
          information about my work relevant skills and experience in the
          sections below.
        </p>
      </div>
      <div>
        <div className="mb-3">
          <SingleAccordion
            title="Technical Skills & Proficiencies"
            content={skillsAndProficiences}
          />
        </div>
        <div className="mb-3">
          <SingleAccordion
            title="Projects & Work Experience"
            content={projectsAndExperience}
          />
        </div>
        <div className="mb-3">
          <SingleAccordion
            title="Non-Technical Skills & Experience"
            content={nonTechnical}
          />
        </div>
      </div>
    </>
  );
}

export default Resume;
