import React, { Component } from "react";
import styled from "styled-components";
import posed from "react-pose";
import moment from "moment";
import { fToCelcius } from "../helpers";

class WeeklyForecast extends Component {
  render() {
    const weeklyData = this.props.data.daily.data.slice(1, 5).map(data => {
      return {
        day: moment(new Date(data.time * 1000)).format("dddd"),
        summary: data.summary,
        maxTemp: fToCelcius(data.temperature)
      };
    });

    return (
      <WeeklyWrapper pose={this.props.visible ? "visible" : "hidden"}>
        test
      </WeeklyWrapper>
    );
  }
}

export default WeeklyForecast;

const Wrapper = posed.div({
  visible: {
    opacity: 1,
    y: 0,
    display: "block",
    transition: {
      opacity: { ease: "easeOut", duration: 300 },
      default: { ease: "easeOut", duration: 500 }
    }
  },
  hidden: {
    display: "none",
    opacity: 0,
    y: "-100%",
    transition: {
      opacity: { ease: "easeIn", duration: 300 },
      default: { ease: "easeIn", duration: 500 }
    }
  }
});

const WeeklyWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  overflow: hidden;
  opacity: 0;
`;
