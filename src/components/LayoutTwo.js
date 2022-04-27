import React from "react";

export const LayoutTwo = (props) => {
  const { image, heading, paragraph } = props;
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-7">
          <h2 className="gradient">{heading}</h2>
          <p className="text-dark">
            {paragraph}
            <br />
          </p>
        </div>
        <div className="col-lg-5">
          <div className="about-img1 card-size slide-image">
            <figure>
              <img
                src={image}
                className="test"
                style={{
                  width: "450px",
                  height: "300px",
                  cursor: "pointer",
                  borderRadius: "50px 0px",
                }}
                alt="style"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};
