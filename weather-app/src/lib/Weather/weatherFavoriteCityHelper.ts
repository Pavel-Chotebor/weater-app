import {Temperature} from "../../models"
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import {OverridableComponent} from "@mui/material/OverridableComponent";
import {SvgIconTypeMap} from "@mui/material";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

interface WeatherDetail {
    minTemperatureText: string,
    maxTemperatureText: string,
    Icon: OverridableComponent<SvgIconTypeMap>
}

export const getWeatherDetails = (temperature: Temperature, iconId:number):WeatherDetail => {
    const getWeatherIcon = () => {
        if (iconId <= 4) return WbSunnyIcon
        return ThunderstormIcon
    }

    return {
        minTemperatureText:`max: ${temperature.Minimum.Value} °${temperature.Minimum.Unit}`,
        maxTemperatureText:`min: ${temperature.Maximum.Value} °${temperature.Maximum.Unit}`,
        Icon: getWeatherIcon()
    }
}