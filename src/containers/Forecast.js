import React, { Component } from "react";
import styled from "styled-components";
import ForecastNav from "../components/ForecastNav";
import HourlyForecast from "../components/HourlyForecast";
import WeeklyForecast from "../components/WeeklyForecast";

class Forecast extends Component {
  state = {
    hourly: true,
    week: false
  };

  changeTab = value => {
    const tabs = {
      hourly: false,
      week: false
    }
    tabs[value] = true;
    this.setState({ ...tabs });
  };

  render() {
    return (
      <ForecastContainer>
        <ForecastNav changeTab={this.changeTab} activeTabs={this.state} />
        <HourlyForecast data={this.props.data} visible={this.state.hourly} />
        <WeeklyForecast data={this.props.data} visible={this.state.week} />
      </ForecastContainer>
    );
  }
}

export default Forecast;

const ForecastContainer = styled.div`
  grid-area: forecastArea;
  display: grid;
  grid-template: "nav"1fr "forecast"4fr / 1fr;
  width: 90%;
  margin-left: 5%;
`;
