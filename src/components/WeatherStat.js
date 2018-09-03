import React from 'react';
import styled from 'styled-components'

export default (props) => {
    const { icon, stat, unit } = props
    return (
        <Stat>
            <i className={`wi wi-${icon}`}></i>
            <p>{`${stat} ${unit}`}</p>
        </Stat>
    )
}

const Stat = styled.div`
    display:flex;
    flex-direction:column;
    font-size: 3rem;
    justify-content: center;
    align-items: center;
`