import React, { Component } from "react";
import styled from "styled-components";
import posed from "react-pose";
import moment from "moment";
import { fToCelcius } from "../helpers";
import ForecastRow from './ForecastRow';

class HourlyForecast extends Component {
  render() {
    const hourlyData = this.props.data.hourly.data.slice(1, 5).map(data => {
      return {
        event: moment(new Date(data.time * 1000)).format("h:mm a"),
        summary: data.summary,
        maxTemp: fToCelcius(data.temperature)
      };
    });
    return (
      <HourlyWrapper pose={this.props.visible ? "visible" : "hidden"}>
        {hourlyData.map((hour, i) => (
          <ForecastRow key={i} data={hour} />
        ))}
      </HourlyWrapper>
    );
  }
}

export default HourlyForecast;

const Wrapper = posed.div({
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { ease: "easeOut", duration: 300 },
      default: { ease: "easeOut", duration: 500 }
    }
  },
  hidden: {
    opacity: 0,
    y: "100%",
    transition: {
      opacity: { ease: "easeIn", duration: 300 },
      default: { ease: "easeIn", duration: 500 }
    }
  }
});

const HourlyWrapper = styled(Wrapper)`
  display: flex;
  grid-area: forecast;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1.5rem;
  overflow: hidden;
  opacity: 0;

   @media (max-width: 750px){
    font-size: 1rem;
  }
`;
