import React from "react";
import PosterImage from "../assets/hydration-poster.jpg";
import { Header } from "./Header";

export const PostImage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="image-content d-flex justify-content-around">
          <p className="my-2">If you want to this poster, you can click on download button</p>

          <a href={PosterImage} className="text-decoration-none" download>
            <button
            className="poster-download"
              style={{
                padding: "10px 70px",
                border: "2px solid #000",
                borderRadius: "15px",
                outline: "none",
              }}
            >
              <i className="fa fa-download pr-3"></i>
              DOWNLOAD
            </button>
          </a>
        </div>
        <img
          src={PosterImage}
          alt="Poster Image"
          style={{ width: "inherit" }}
        />
      </div>
    </>
  );
};
