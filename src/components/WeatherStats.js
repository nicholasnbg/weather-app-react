import React from 'react';
import styled from 'styled-components';
import { convertWind, convertToPercent, convertMphToKph } from '../helpers'
import WeatherStat from './WeatherStat';

const WeatherStats = (props) => {
    const { data } = props;
    const stats = pullStats(data);

    return (
        <WeatherStatsContainer>
            <StatsHeading>Stats</StatsHeading>
            <StatsDisplay>
                <WeatherStat icon={'rain'} stat={stats.rainChance} unit={'%'} />
                <WeatherStat icon={'wind-direction'} stat={stats.windDirText} unit={''} />
                <WeatherStat icon={'strong-wind'} stat={stats.windSpeed} unit={'km'} />
                <WeatherStat icon={'humidity'} stat={stats.humidity} unit={'%'} />
            </StatsDisplay>
        </WeatherStatsContainer>
    )
}

export default WeatherStats

const pullStats = data => {
    const rainChance = convertToPercent(data.currently.precipProbability);
    const windDirText = convertWind(data.currently.windBearing);
    const windSpeed = convertMphToKph(data.currently.windSpeed);
    const humidity = convertToPercent(data.currently.humidity);
    const icon = data.currently.icon;
    return {
        rainChance, windDirText, windSpeed, humidity, icon
    }
}

const WeatherStatsContainer = styled.div`
  grid-area: stats;
  display: grid;
  max-height: 40vh;
  grid-template-rows: 1fr 4fr;
  @media (max-width: 1000px){
    max-height: none;
    grid-template-rows: 1fr 3fr;
  }
`

const StatsHeading = styled.h2`
    border-bottom: grey 1px solid;
    margin-left: 5%;
    margin-bottom: 0; 
    padding-bottom: 30px;
    width: 90%;
`

const StatsDisplay = styled.div`
    display: flex;
    justify-content: space-around;
`