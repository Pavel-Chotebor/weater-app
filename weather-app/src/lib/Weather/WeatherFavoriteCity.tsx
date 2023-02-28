import { useGetForecastQuery } from "../../redux"

interface WeatherFavoriteCityProps {
    cityId:string
}

export const WeatherFavoriteCity = ({cityId}:WeatherFavoriteCityProps) => {
    const {data} = useGetForecastQuery(cityId)

    return <></>

}