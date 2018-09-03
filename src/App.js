import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { getLocation, weatherApi } from "./weatherApi";
import CurrentDay from "./components/CurrentDay";
import Spinner from "./components/Spinner";
import WeatherStats from "./components/WeatherStats";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      userLocation: null,
      weatherData: null
    };
  }

  componentDidMount() {
    getLocation
      .then(res => {
        this.setState({ userLocation: res });
      })
      .then(() => {
        const { lat, long } = this.state.userLocation;
        axios(
          `${weatherApi.corsAnywhere}${weatherApi.call}${
          weatherApi.key
          }${lat},${long}`
        ).then(res => {
          this.setState({
            weatherData: res.data,
            loading: false
          });
        });
      });
  }

  render() {
    const content = (
      <React.Fragment>
        <CurrentDay data={this.state.weatherData} />
        <WeatherStats data={this.state.weatherData} />
      </React.Fragment>
    );

    return (
      <div className="App">{this.state.loading ? <Spinner /> : content}</div>
    );
  }
}

export default App;
