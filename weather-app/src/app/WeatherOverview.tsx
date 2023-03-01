import {Container} from "@mui/material";
import {WeatherCitySelect} from "../lib";

export const WeatherOverview = (): JSX.Element => {
    return (
        <Container style={{marginTop: "6rem"}} maxWidth="lg">
            <WeatherCitySelect/>
        </Container>
    )
}