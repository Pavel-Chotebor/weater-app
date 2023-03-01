import {Temperature} from "../../models"

interface WeatherDetail {
    minTemperatureText: string,
    maxTemperatureText: string
}

export const getWeatherDetails = (temperature: Temperature):WeatherDetail => {
    return {
        minTemperatureText:`max: ${temperature.Minimum.Value} ${temperature.Minimum.Unit}`,
        maxTemperatureText:`min: ${temperature.Maximum.Value} ${temperature.Maximum.Unit}`
    }
}