import React, { Component } from "react";
import styled from "styled-components";
import ForecastNav from "./ForecastNav";
import HourlyForecast from "./HourlyForecast";

class Forecast extends Component {
  state = {
    hourly: true,
    week: false
  };

  changeTab = value => {
    this.setState(
      {
        hourly: false,
        week: false
      },
      () => {
        this.setState({
          [value]: true
        });
      }
    );
  };

  render() {
    return (
      <ForecastContainer>
        <ForecastNav changeTab={this.changeTab} />
        <HourlyForecast data={this.props.data} visible={this.state.hourly} />
      </ForecastContainer>
    );
  }
}

export default Forecast;

const ForecastContainer = styled.div`
  grid-area: forecast;
  display: grid;
  grid-template-rows: 1fr 4fr;
  width: 90%;
  margin-left: 5%;
`;
