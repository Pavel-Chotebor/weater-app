import {AppBar, Box, Button, Toolbar} from "@mui/material"
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import {useHistory} from "react-router";
import {useWeatherRoutesContext} from "../context";


export const AppHeader = (): JSX.Element => {
    const {push} = useHistory();
    const {overview, favorite} = useWeatherRoutesContext()

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar sx={{backgroundColor: "black"}} position="static">
                <Toolbar>
                    <Box style={{marginRight: "1rem"}}>
                        <CloudOutlinedIcon style={{color: "#82EEFD"}}/>
                    </Box>
                    <Button onClick={() => push(overview)} color="inherit">Select city</Button>
                    <Button onClick={() => push(favorite)} color="inherit">Favorite City</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}