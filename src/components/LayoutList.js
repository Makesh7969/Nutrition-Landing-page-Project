import React from "react";

export const LayoutList = (props) => {
  const {
    heading,
    paragraph,
    subText,
    numberList,
    descriptionList,
    firstList,
    secondList,
    thirdList,
    fourthList,
    fifthList,
    sixthList,
    seventhList,
    eightList,
    firstDescription,
    firstDescriptionData,
    secondDescriptionData,
    secondDescription,
    thirdDescriptionData,
    firstDescriptionSecondData,
    secondDescriptionSecondData,
    thirdDescriptionSecondData,
    fourthDescriptionSecondData
  } = props;

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-12">
          <h3 className="gradient">{heading}</h3>
          {subText ? <p>{subText}</p> : ""}
          {descriptionList ? (
            <dl>
              {firstDescription && (
                <>
                  {firstDescription ? <dt>{firstDescription}</dt> : ""}
                  {firstDescriptionData ? <dd>{firstDescriptionData}</dd> : ""}
                  {secondDescriptionData ? <dd>{secondDescriptionData}</dd> : ""}
                  {thirdDescriptionData ? <dd>{thirdDescriptionData}</dd> : ""}
                </>
              )}
              {secondDescription && (
                <>
                  {secondDescription ? <dt>{secondDescription}</dt> : ""}
                  {firstDescriptionSecondData ? <dd>{firstDescriptionSecondData}</dd> : ""}
                  {secondDescriptionSecondData ? <dd>{secondDescriptionSecondData}</dd> : ""}
                  {thirdDescriptionSecondData ? <dd>{thirdDescriptionSecondData}</dd> : ""}
                  {fourthDescriptionSecondData ? <dd>{fourthDescriptionSecondData}</dd> : ""}
                </>
              )}
            </dl>
          ) : (
            ""
          )}
          {numberList ? (
            <ol>
              {firstList ? <li>{firstList}</li> : ""}
              {secondList ? <li>{secondList}</li> : ""}
              {thirdList ? <li>{thirdList}</li> : ""}
              {fourthList ? <li>{fourthList}</li> : ""}
              {fifthList ? <li>{fifthList}</li> : ""}
              {sixthList ? <li>{sixthList}</li> : ""}
              {seventhList ? <li>{seventhList}</li> : ""}
              {eightList ? <li>{eightList}</li> : ""}
            </ol>
          ) : (
            <ul>
              {firstList ? <li>{firstList}</li> : ""}
              {secondList ? <li>{secondList}</li> : ""}
              {thirdList ? <li>{thirdList}</li> : ""}
              {fourthList ? <li>{fourthList}</li> : ""}
              {fifthList ? <li>{fifthList}</li> : ""}
              {sixthList ? <li>{sixthList}</li> : ""}
              {seventhList ? <li>{seventhList}</li> : ""}
              {eightList ? <li>{eightList}</li> : ""}
            </ul>
          )}
          {paragraph ? <p>{paragraph}</p> : ""}
        </div>
      </div>
    </div>
  );
};
