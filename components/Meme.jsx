import React from "react";

export default function Meme() {
  return (
    <>
      <form className="form">
        <div>
          <label htmlFor="top-text" className="form--label">
            Top text
          </label>
          <input
            id="top-text"
            type="text"
            placeholder="Shut Up"
            className="form--input"
          />
        </div>
        <div>
          <label htmlFor="bottom-text" className="form--label">
            Bottom text
          </label>

          <input
            id="bottom-text"
            type="text"
            placeholder="And Take My Money"
            className="form--input"
          />
        </div>
        <button className="form--button">Get a new meme image 🖼️</button>
      </form>
    </>
  );
}
