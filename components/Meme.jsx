import React, { useState } from "react";
import memesData from "../memesData.jsx";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <>
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
      <img src={meme.randomImage} alt="meme" className="meme--image" />
    </>
  );
}
