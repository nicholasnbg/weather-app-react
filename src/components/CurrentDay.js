import React from "react";
import styled from "styled-components";
import moment from "moment";

const CurrentDay = props => {
  const { data } = props;
  return (
    <CurrentDayContainer className="gradbg">
      <CurrentDate>{moment(new Date()).format("MMMM Do YYYY")}</CurrentDate>
      <CurrentTemp>
        {data && Math.round(((data.currently.temperature - 32) * 5) / 9)} &deg;
      </CurrentTemp>
      <City>{data.timezone.split("/")[1]}</City>
      <CurrentSummary>{data.currently.summary}</CurrentSummary>
    </CurrentDayContainer>
  );
};

export default CurrentDay;

const CurrentDayContainer = styled.div`
  grid-area: currentDay;
  color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  padding: 30px 50px;
  border-radius: 1em 0 0 1em;
  @media (max-width: 1000px){
    border-radius: 1em 1em 0 0;
  }
`

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
