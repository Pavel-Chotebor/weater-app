//capital letters are unfortunately from be model dto..
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
    Day: { Icon: number }
}

export interface WeatherForecast {
    DailyForecasts: WeatherForecastDetail[]
}