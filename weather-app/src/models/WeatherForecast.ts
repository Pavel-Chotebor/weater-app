interface TemperatureDetail {
    Value: string,
    Unit: string
}

export interface Temperature {
    Maximum: TemperatureDetail,
    Minimum: TemperatureDetail
}

export interface WeatherForecastDetail {
    Temperature: Temperature
}

export interface WeatherForecast {
    DailyForecasts: WeatherForecastDetail[]
}