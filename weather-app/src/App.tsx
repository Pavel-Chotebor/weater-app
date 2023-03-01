import {store} from './redux/store';
import {Provider} from 'react-redux'
import {WeatherRoutes} from "./app/WeatherRoutes";
import {routeDefinitions} from "./app/routeDefinitions";
import {weatherRoutesContext} from "./lib";

function App() {
    const WeatherRoutesContextProvider = weatherRoutesContext.Provider

    return (
        <Provider store={store}>
            <WeatherRoutesContextProvider
                value={{overview: routeDefinitions.overview, favorite: routeDefinitions.favorite}}
            >
                <WeatherRoutes/>
            </WeatherRoutesContextProvider>
        </Provider>
    );
}

export default App;
