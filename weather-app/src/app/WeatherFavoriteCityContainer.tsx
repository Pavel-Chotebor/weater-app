import {WeatherFavoriteCity, useGetSelectedCity, useWeatherRoutesContext} from "../lib";
import {Alert, Box, Button, Container, Paper} from "@mui/material";
import {useHistory} from "react-router";

export const WeatherFavoriteCityContainer = () => {
    const {cityDetail} = useGetSelectedCity()
    const {push} = useHistory()
    const {overview} = useWeatherRoutesContext()

    return (
        <Container maxWidth="md">
            <Paper style={{padding: "2rem", marginTop: "6rem"}}>
                <Box display="flex" flexDirection="column" alignItems="center">
                    {!!cityDetail ?
                        <WeatherFavoriteCity cityDetail={cityDetail}/>
                        :
                        <Alert variant="filled" severity="error">No favorite city set!</Alert>
                    }
                    <Button
                        style={{margin: "1rem"}}
                        variant="contained"
                        onClick={() => push(overview)}
                    >
                        GO TO SET FAVORITE
                    </Button>
                </Box>
            </Paper>
        </Container>
    )
}