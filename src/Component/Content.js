import React, { useState } from "react";

function Content(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleRomoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div>
        <div
          className={`container my-3 text-center text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <strong>
            <p>
              {text.split(" ").length} words and {text.length} characters
            </p>
          </strong>
        </div>
        <h5 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          <strong>{props.heading}</strong>
        </h5>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="14"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              borderRadius: "10px",
              color: props.mode === "dark" ? "white" : "black",
              borderWidth: "4px",
            }}
          ></textarea>
        </div>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "primary"
          } mx-2 my-2  `}
          onClick={handleUpClick}
        >
          Convert To Uppercase
        </button>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "primary"
          } mx-2 my-2  `}
          onClick={handleLoClick}
        >
          Convert To Lowercase
        </button>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "primary"
          } mx-2 my-2  `}
          onClick={handleRomoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "primary"
          } mx-2 my-2  `}
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "primary"
          } mx-2 my-2  `}
          onClick={handleClear}
        >
          Clear Text
        </button>
      </div>
    </>
  );
}

export default Content;
