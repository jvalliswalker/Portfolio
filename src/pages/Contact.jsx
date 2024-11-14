import { useOutletContext } from "react-router";

function Contact() {
  const [styleHandler] = useOutletContext();

  const style = styleHandler.contact;

  return (
    <div>
      <div class="mb-3 fw-bold fs-2">Contact Me</div>
      <form>
        <div class="mb-3">
          <label for="contactInputName" class="form-label">
            Name
          </label>
          <input type="email" class="form-control" id="contactInputName" />
        </div>
        <div class="mb-3">
          <label for="contactInputEmail" class="form-label">
            Email
          </label>
          <input type="email" class="form-control" id="contactInputEmail" />
        </div>
        <div class="mb-3">
          <label class="form-label" for="contactInputMessage">
            Message
          </label>
          <textarea class="form-control" id="contactInputMessage" rows="4" />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
