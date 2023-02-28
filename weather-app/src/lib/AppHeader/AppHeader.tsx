import {AppBar, Box, Button, Toolbar} from "@mui/material"
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import {useHistory} from "react-router";


export const AppHeader = () => {
    const {push} = useHistory();
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Box style={{marginRight: "1rem"}}>
                        <CloudOutlinedIcon/>
                    </Box>
                    <Button onClick={() => push("/")} color="inherit">Select city</Button>
                    <Button onClick={() => push("/favorite")} color="inherit">Favorite City</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}