import React from 'react'
import styled from 'styled-components'

const WeeklyRow = (props) => {
    const { weekData } = props;
    return (
        <Row>
            <Small>{weekData.day}</Small>
            <Summary>{weekData.summary}</Summary>
            <Small>
                {weekData.maxTemp}
                &deg;
      </Small>
        </Row>
    )
}

export default WeeklyRow

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
`