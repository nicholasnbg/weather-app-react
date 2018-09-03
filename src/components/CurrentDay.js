import React from "react";
import styled from "styled-components";
import moment from "moment";

const CurrentDay = props => {
  const { data } = props;
  return (
    <div className="currentDay gradbg">
      <CurrentDate>{moment(new Date()).format("MMMM Do YYYY")}</CurrentDate>
      <CurrentTemp>
        {data && Math.round(((data.currently.temperature - 32) * 5) / 9)} &deg;
      </CurrentTemp>
      <City>{data.timezone.split("/")[1]}</City>
      <CurrentSummary>{data.currently.summary}</CurrentSummary>
    </div>
  );
};

export default CurrentDay;

const CurrentDate = styled.h2`
  margin-bottom: auto;
`;

const CurrentTemp = styled.p`
  font-size: 3rem;
  margin-bottom: 5px;
`;

const City = styled.p`
  margin: 0;
  font-size: 1.25rem;
`;

const CurrentSummary = styled.p`
  margin: 0;
  font-size: 1.25rem;
  font-style: italic;
`;
