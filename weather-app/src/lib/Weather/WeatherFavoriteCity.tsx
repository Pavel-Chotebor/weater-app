import {useGetForecastQuery} from "../../redux"
import {Alert, Box, CircularProgress, Typography} from "@mui/material";
import {City} from "../../models";
import {getWeatherDetails} from "./weatherFavoriteCityHelper";

interface WeatherFavoriteCityProps {
    cityDetail: City
}

export const WeatherFavoriteCity = ({cityDetail}: WeatherFavoriteCityProps) => {
    const {data, error, isLoading} = useGetForecastQuery(cityDetail.Key)

    //in real project i would create Loader, which takes data, isLoading, error and handles loading
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4">{cityDetail.LocalizedName}</Typography>

            {isLoading && <CircularProgress/>}

            {!!data && data.DailyForecasts.map(({Temperature}) => {
                    const {minTemperatureText, maxTemperatureText} = getWeatherDetails(Temperature)
                    return (
                        <Box
                            key={Temperature.Minimum.Value}
                        >
                            <Typography
                                variant="h5">{minTemperatureText}</Typography>
                            <Typography
                                variant="h5">{maxTemperatureText}</Typography>
                        </Box>
                    )
                }
            )}
            {!!error && <Alert variant="filled" severity="error">Error</Alert>}
        </Box>
    )
}