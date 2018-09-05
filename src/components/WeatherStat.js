import React from "react";
import styled from "styled-components";

export default props => {
  const { icon, stat, unit } = props;
  return (
    <Stat>
      <i className={`wi wi-${icon}`} />
      <p>{`${stat} ${unit}`}</p>
    </Stat>
  );
};

const Stat = styled.div`
  display: flex;
  padding-top: 1.5rem;
  flex-direction: column;
  font-size: 3rem;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 750px){
    font-size: 2rem;
  }
`;
