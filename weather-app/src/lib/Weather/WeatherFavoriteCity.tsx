import {deleteCityDetail, useGetForecastQuery} from "../../redux"
import {Alert, Box, Button, CircularProgress, Typography} from "@mui/material";
import {City} from "../../models";
import {getWeatherDetails} from "./weatherFavoriteCityHelper";
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch} from "react-redux";

interface WeatherFavoriteCityProps {
    cityDetail: City
    deleteButton?: boolean
}

export const WeatherFavoriteCity = ({cityDetail, deleteButton = true}: WeatherFavoriteCityProps): JSX.Element => {
    const {data, error, isLoading} = useGetForecastQuery(cityDetail.Key)
    const dispatch = useDispatch()

    //in real project i would create Loader, which takes data, isLoading, error and handles loading
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4">{cityDetail.LocalizedName}</Typography>

            {isLoading && <CircularProgress/>}

            {!!data && data.DailyForecasts.map(({Temperature, Day}) => {
                    const {minTemperatureText, maxTemperatureText, Icon} = getWeatherDetails(Temperature, Day.Icon)

                    return (
                        <Box display="flex" flexDirection="column" alignItems="center"
                             key={Temperature.Minimum.Value}
                        >
                            <Typography
                                variant="h5">{minTemperatureText}</Typography>
                            <Typography
                                variant="h5">{maxTemperatureText}</Typography>
                            <Icon height={64} width={64}/>
                        </Box>
                    )
                }
            )}

            {!!error && <Alert variant="filled" severity="error">Error</Alert>}

            {deleteButton && (
                <Button
                    style={{margin: "1rem"}}
                    variant="contained"
                    onClick={() => dispatch(deleteCityDetail())}
                    endIcon={<DeleteIcon/>}
                >
                    delete city
                </Button>
            )}
        </Box>
    )
}