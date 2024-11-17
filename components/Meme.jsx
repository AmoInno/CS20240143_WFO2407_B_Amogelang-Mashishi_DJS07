import React, { useState } from "react";
import memesData from "../memesData.jsx";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
    console.log(url);
  }
  return (
    <>
      <p>{url}</p>
      <div className="form">
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
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼️
        </button>
      </div>
      <img src={memeImage} alt="" className="meme--image" />
    </>
  );
}
