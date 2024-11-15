import { useOutletContext } from "react-router";
import InputWithValidation from "../components/InputWithValidation";

function Contact() {
  const [styleHandler] = useOutletContext();

  const style = styleHandler.contact;

  const fieldValidationTracker = {
    invalidName: false,
    invalidEmail: false,
    invalidMessage: false,
  };

  const handleNameMouseOut = () => {
    console.log("hello name!");
  };

  const handleEmailMouseOut = () => {
    console.log("hello email!");
  };

  const handleMessageMouseOut = () => {
    console.log("hello message!");
  };

  return (
    <div className={style.formWrapperStyling}>
      <div className="mb-3 fw-bold fs-2">Contact Me</div>
      <form>
        <div className={style.inputWrapperStyling}>
          <InputWithValidation labelText="Name" inputType="text" />
        </div>
        <div className={style.inputWrapperStyling}>
          <InputWithValidation labelText="Email" inputType="email" />
        </div>
        <div className={style.inputWrapperStyling}>
          <InputWithValidation labelText="Message" inputType="richtext" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
