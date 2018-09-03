import React, { Component } from "react";
import styled from "styled-components";

class ForecastNav extends Component {
  handleClick = e => {
    this.props.changeTab(e.target.id);
    const buttons = document.querySelectorAll(".forecastNav > ul > li");
    buttons.forEach(button => {
      button.classList.remove("gradbg");
    });
    const newActive = document.querySelector(`#${e.target.id}`);
    newActive.classList.add("gradbg");
  };

  render() {
    return (
      <NavWrapper className="forecastNav">
        <NavList>
          <NavButton
            id="hourly"
            className={"gradbg"}
            value={"hourly"}
            onClick={e => this.handleClick(e)}
          >
            Today
          </NavButton>
          <NavButton
            id="week"
            value={"week"}
            onClick={e => this.handleClick(e)}
          >
            Week
          </NavButton>
        </NavList>
      </NavWrapper>
    );
  }
}

export default ForecastNav;

const NavWrapper = styled.nav`
  margin-bottom: 25px;
  display: flex;
  width: 100%;
  border-bottom: grey 1px solid;
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: flex-end;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-weight: 400;
  &:hover {
    cursor: pointer;
  }
`;

const NavButton = styled.li`
  text-align: center;
  padding: 14px 16px;
  color: #1f1f1f;
  border-radius: 10px 10px 0 0;
  &.gradbg {
    color: #f2f2f2;
  }
`;
