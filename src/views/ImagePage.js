import React from "react";
import Image from "../assets/Education on Sports nutrition.jpg";
import { Header } from "./Header";

export const ImagePage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <img src={Image} alt="Nutrition Image" style={{position: "relative", left:"15%"}}/>
      </div>
    </>
  );
};
