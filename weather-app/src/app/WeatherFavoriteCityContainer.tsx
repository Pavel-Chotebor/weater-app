import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {WeatherFavoriteCity} from "../lib";
import {Alert, Container, Paper} from "@mui/material";

export const WeatherFavoriteCityContainer = () => {
    const {selectedCity: {cityDetail}} = useSelector((state: RootState) => state)

    return (
        <Container maxWidth="md">
            <Paper style={{padding: "2rem", marginTop: "6rem"}}>
                {!!cityDetail?.Key ?
                    <WeatherFavoriteCity cityId={cityDetail?.Key}/>
                    :
                    <Alert variant="filled" severity="error">No favorite city set!</Alert>
                }
            </Paper>
        </Container>
    )
}