import { useState } from "react";

function InputWithValidation({ labelText, inputType }) {
  const [isValid, setIsValid] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const inputId = `${labelText}${inputType}`;
  const emailRegex = /^[\w\d\.-]*@[\w\d\.-]+\.\w+$/i;

  let warningText = "";

  if (inputType == "email") {
    warningText = "Invalid email address";
  } else if (inputType == "text") {
    warningText = "You must enter at least two characters";
  } else if (inputType == "richtext") {
    warningText = "You must enter at least 10 characters";
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);

    if (inputType == "email") {
      setIsValid(false);
    }
  };

  const validateField = () => {
    if (inputType == "email") {
      setIsValid(emailRegex.test(inputValue));
    } else if (inputType == "text") {
      setIsValid(inputValue.length >= 2);
    } else if (inputType == "richtext") {
      setIsValid(inputValue.length > 9);
    }
  };

  return (
    <>
      <label htmlFor={inputId} className="form-label">
        {labelText}
      </label>
      {inputType == "richtext" ? (
        <textarea
          className="form-control"
          id={inputId}
          rows="4"
          onChange={handleInputChange}
          value={inputValue}
          onMouseOut={validateField}
        />
      ) : (
        <input
          className="form-control"
          id={inputId}
          onMouseOut={validateField}
          value={inputValue}
          onChange={handleInputChange}
        />
      )}
      {isValid == false ? (
        <div className="text-danger">{warningText}</div>
      ) : null}
    </>
  );
}

export default InputWithValidation;
