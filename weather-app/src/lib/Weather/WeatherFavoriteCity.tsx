import {useGetForecastQuery} from "../../redux"
import {Alert, CircularProgress} from "@mui/material";

interface WeatherFavoriteCityProps {
    cityId: string
}

export const WeatherFavoriteCity = ({cityId}: WeatherFavoriteCityProps) => {
    const {data, error, isLoading} = useGetForecastQuery(cityId)

    //in real case i would create some Loader, which takes data,isLoading,error and handle loading
    return (
        <>
            {isLoading && <CircularProgress/>}
            {!!data && "data"}
            {!!error && <Alert variant="filled" severity="error">Error</Alert>}
        </>
    )


}