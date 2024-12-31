import { useOutletContext } from "react-router";

function Contact() {
  const [styleHandler] = useOutletContext();

  const style = styleHandler.contact;

  return (
    <div className={style.formWrapperStyling}>
      <div className="mb-3 fw-bold fs-2">Contact Me</div>
      <div>
        <div>
          The best way to get in touch with me is through{" "}
          <a
            href="https://www.linkedin.com/in/jamil-vallis-walker-43706a60/"
            target="_blank"
          >
            LinkedIn
          </a>{" "}
          .
        </div>
      </div>
    </div>
  );
}

export default Contact;
