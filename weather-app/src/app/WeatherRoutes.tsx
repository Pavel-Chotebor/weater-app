import {WeatherFavoriteCityContainer} from "./WeatherFavoriteCityContainer";
import {WeatherOverview} from "./WeatherOverview";
import {Route, Router, Switch} from "react-router";
import {createBrowserHistory} from "history";
import {AppHeader} from "../lib";
import {routeDefinitions} from "./routeDefinitions";

const history = createBrowserHistory();

export const WeatherRoutes = () => {

    return (
            <Router history={history}>
                <AppHeader/>
                <Switch>
                    <Route path={routeDefinitions.overview} exact>
                        <WeatherOverview/>
                    </Route>
                    <Route path={routeDefinitions.favorite} exact>
                        <WeatherFavoriteCityContainer/>
                    </Route>
                </Switch>
            </Router>
    )
}
