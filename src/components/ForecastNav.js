import React, { Component } from "react";
import styled from "styled-components";

class ForecastNav extends Component {
  state = {
    activeTabs: {
      hourly: true,
      week: false
    }
  }

  componentWillReceiveProps = (newProps) => {
    if (newProps.activeTabs) {
      this.setState({
        activeTabs: newProps.activeTabs
      })
    }
  }


  handleClick = e => {
    this.props.changeTab(e.target.id);
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
            className={this.state.activeTabs.hourly ? "gradbg" : ""}
          >
            Today
          </NavButton>
          <NavButton
            id="week"
            value={"week"}
            onClick={e => this.handleClick(e)}
            className={this.state.activeTabs.week ? "gradbg" : ""}
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
grid-area: nav;
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
