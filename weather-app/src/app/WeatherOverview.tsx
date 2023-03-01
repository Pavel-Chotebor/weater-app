import {Container} from "@mui/material";
import {WeatherCitySelect} from "../lib";

export const WeatherOverview = () => {
    return (
        <Container style={{marginTop: "6rem"}} maxWidth="md">
            <WeatherCitySelect/>
        </Container>
    )
}