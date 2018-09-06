import React from "react";
import styled from "styled-components";

const ForecastRow = props => {
    const { data } = props;
    return (
        <Row>
            <Small>{data.event}</Small>
            <Summary>{data.summary}</Summary>
            <Small>{data.maxTemp} &deg;</Small>
        </Row>
    );
};

export default ForecastRow;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Summary = styled.p`
  flex-grow: 2;  
  text-align: center;
   @media (max-width: 750px){
    max-width: 48%;
    
  }
`
const Small = styled.p`
width: 20%;
&:nth-child(3){
    text-align: right;
}
`; 
