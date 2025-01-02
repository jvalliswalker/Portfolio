import "../../styles/index.css";
import "../../styles/contact.css";
import { useOutletContext } from "react-router";

function About() {
  const [styleHandler] = useOutletContext();

  return (
    <div>
      <div>
        <h2 className={styleHandler.underlinedHeader}>What I Offer</h2>
        <div className={styleHandler.paragraphStyling}>
          <h5>Communication</h5>
          <p>
            Communication is the backbone to any good project. I'm not the kind
            of developer who likes to pull tickets and do their work without
            interacting with anyone. I like to get to know the people I'm
            building for, and I like to understand their needs and pain points
            with the system. That way I can deliver an end product that doesn't
            just solve the problem at hand, but increases the overall experience
            with the technology they're using, so that productivity and digital
            quality of life both improve.
          </p>
          <h5>Drive</h5>
          <p>
            I'm naturally driven to assess, build, and tinker, and am passionate
            about making how we all use technology a smoother and more
            productive experience.{" "}
            <a
              href="https://www.linkedin.com/in/jamil-vallis-walker-43706a60/details/recommendations/?detailScreenTabIndex=0"
              target="_blank"
              className="paragraph-hyperlink"
            >
              This enthusiasm shows
            </a>
            , and the focus of my career is to find a place where my natural
            excitement matches the needs of a company and the teams I support.
          </p>
          <h5>Productivity</h5>
          <p>
            Bad technology costs time, money, and user frustration, which is bad
            for customers and staff alike (for a comical example of this, check
            out the intentionally poorly designed{" "}
            <a
              href="https://userinyerface.com/"
              target="_blank"
              className="paragraph-hyperlink"
            >
              User Inyerface
            </a>
            ). When I meet with a new team and start learning about their
            processes, I immediately start thinking about what works well, what
            doesn't, and how things could be improved. My goal in any place
            where I work is to leave the technology I'm working on in a better
            state than it was when I found it.
          </p>
        </div>
      </div>
      <div>
        <h2 className={styleHandler.underlinedHeader}>My Story</h2>
        <div className={styleHandler.paragraphStyling}>
          <p>
            I first realized I was interested in technology when working at my
            first job out of college. The company was using an excel sheet to
            process student SAT scores, but required a manual lookup after the
            raw scores had been entered that added a lot of extra time for each
            exam. I was fascinated by the way an excel sheet had been turned
            into a quasi-application, and wondered if this final lookup step
            could be something that the computer could handle as well. After
            some googling and dedicated trial-and-error, I was able to set up
            the spreadsheet to do just that, which resulted in that manual step
            being eliminated for each SAT we processed moving forward. The
            process of seeing a problem, seeking out and implementing a
            solution, and the subsequent headache that the new solution resolved
            was a process that I was captivated by, and have been persuing ever
            since.
          </p>
          <p>
            Over the course of my next several jobs, I eventually found my way
            into the Salsforce ecosystem. I started as a Salesforce
            Administrator, but was so taken with the building of automation and
            the building python scripts for ETL tasks at the company that after
            a year and a half I was promoted to a full Developer. I've now spent
            over five years continuing to learn about Object Oriented
            Programming and SOLID design principles, and have worked on projects
            across the front- and back-end. I truly enjoy building
            applications/technical solutions that increase efficiency and reduce
            pain points in user experiences. Sitting down with an end-user and
            figuring out what would make their life easier is fuel to my fire,
            and the process of creating and interating on a new or redesigned
            user interface is a blast.
          </p>
        </div>
      </div>
      <div className="mb-2">
        <h2 className={styleHandler.underlinedHeader}>Technical Skills</h2>
        <p>
          My primary coding languages are{" "}
          <span className="fw-bold">Javascript</span>,{" "}
          <span className="fw-bold">Python</span>,{" "}
          <span className="fw-bold">HTML/CSS</span>, and{" "}
          <span className="fw-bold">Apex</span> (a modified version of Java).
          Within these languages, I've worked with the following frameworks and
          libraries:
        </p>
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

export default About;
