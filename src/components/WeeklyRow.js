import React from 'react'
import styled from 'styled-components'

const WeeklyRow = (props) => {
    const { weekData } = props;
    return (
        <Row>
            <p>{weekData.day}</p>
            <p>{weekData.summary}</p>
            <p>
                {weekData.maxTemp}
                &deg;
      </p>
        </Row>
    )
}

export default WeeklyRow

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;