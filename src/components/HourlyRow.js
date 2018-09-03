import React from "react";
import styled from "styled-components";

const HourlyRow = props => {
  const { hourData } = props;
  return (
    <Row>
      <p>{hourData.time}</p>
      <p>{hourData.summary}</p>
      <p>
        {hourData.maxTemp}
        &deg;
      </p>
    </Row>
  );
};

export default HourlyRow;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
