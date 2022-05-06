import React from "react";

export const LayoutThree = (props) => {
  const { heading, paragraph } = props;
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-12">
          <h3 className="gradient">{heading}</h3>
          <p className="text-dark">
            {paragraph}
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};
