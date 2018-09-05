import React from "react";
import spinner from "./spinner.gif";
import styled from "styled-components";

export default () => {
  return (
    <Spinner >
      <img src={spinner} alt="loading..." />
    </Spinner>
  );
};

const Spinner = styled.div`
  width: 200px;
  display: block;
  position: absolute;
  top: 30%;
  left: 40%;
  @media (max-width: 1000px){
    width: 100px;
    left: 20%;
  }
`