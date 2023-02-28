import {Autocomplete, Box, Button, Paper, Snackbar, TextField, Typography} from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setCityDetail, useGetCitiesQuery} from "../../redux";

const DEFAULT_DATA_VALUE: any[] = []

export const WeatherCitySelect = () => {
    const [cityQuery, setCityQuery] = useState("")
    const [isAlertOpen, setIsAlertOpen] = useState(false)
    const [cityDetailObj, setCityDetailObj] = useState()

    const {data, isLoading} = useGetCitiesQuery(cityQuery, {skip: !cityQuery})
    const dispatch = useDispatch()

    //saving forecast detail to redux
    const onDispatch = () => {
        dispatch(setCityDetail(cityDetailObj))
        setIsAlertOpen(true)
    }

    return (
        <Paper style={{padding: "4rem"}}>
            <Box display="flex" flexDirection="column" alignItems="center" alignContent="center">
                <Typography style={{marginBottom: "1rem"}} variant="h5">SELECT FAVORITE CITY</Typography>
                <Autocomplete
                    id="city"
                    loading={isLoading}
                    options={data || DEFAULT_DATA_VALUE}
                    getOptionLabel={(option: any) => option.LocalizedName}
                    onChange={(e, value) => setCityDetailObj(value)}
                    sx={{width: 300}}
                    renderInput={
                        (params) =>
                            <TextField
                                value={cityQuery}
                                onChange={(e) => setCityQuery(e.target.value)}
                                {...params}
                                label="City"
                            />
                    }
                />
                <Button
                    style={{margin: "1rem"}}
                    disabled={!cityDetailObj}
                    variant="contained"
                    onClick={onDispatch}
                    endIcon={<FavoriteIcon/>}>
                    Set favorite city
                </Button>
                <Snackbar
                    open={isAlertOpen}
                    onClose={() => setIsAlertOpen(false)}
                    autoHideDuration={3000}
                    message="Saved"
                />
            </Box>
        </Paper>
    )
}