import React, { Component } from 'react';
import styled from 'styled-components';
import ForecastNav from './ForecastNav';

class Forecast extends Component {

    state = {
        tabOpen: 1
    }

    changeTab = (index) => {
        this.setState({
            tabOpen: index
        })
    }

    render() {
        return (
            <ForecastContainer>
                <ForecastNav changeTab={this.changeTab}></ForecastNav>
            </ForecastContainer>
        )
    }
}


export default Forecast;

const ForecastContainer = styled.div`
      grid-area: forecast;
  display: grid;
  grid-template-rows: 1fr 4fr;
  width: 90%;
  margin-left: 5%;
`