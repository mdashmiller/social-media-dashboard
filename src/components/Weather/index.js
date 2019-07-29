import React from 'react'

import Loading from '../Loading'

import { weather } from '../../store/fakeData'

const Weather = () => {
  return (
    <section data-testid="weather">
      <h2>Weather</h2>
      {weather ? (
        <div data-testid="weather-info">
          <p data-testid="weather-location">{weather.location}</p>
          <p data-testid="weather-icon">{weather.icon}</p>
          <p data-testid="weather-temperature">{weather.temperature}</p>
          <p data-testid="weather-description">{weather.description}</p>
        </div>
      ) : (
        <Loading />
      )}
    </section>
  )
}

export default Weather
