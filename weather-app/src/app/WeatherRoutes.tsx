import {WeatherFavoriteCityContainer} from "./WeatherFavoriteCityContainer";
import {WeatherOverview} from "./WeatherOverview";
import {Route, Router, Switch} from "react-router";
import {createBrowserHistory} from "history";
import {AppHeader} from "../lib";

const history = createBrowserHistory();

export const WeatherRoutes = () => {
    return (
        <Router history={history}>
            <AppHeader/>
            <Switch>
                <Route path="/" exact>
                    <WeatherOverview/>
                </Route>
                <Route path="/favorite" exact>
                    <WeatherFavoriteCityContainer/>
                </Route>
            </Switch>
        </Router>
    )
}
