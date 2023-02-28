import {store} from './redux/store';
import {Provider} from 'react-redux'
import {WeatherRoutes} from "./app/WeatherRoutes";

function App() {
    return (
        <Provider store={store}>
            <WeatherRoutes/>
        </Provider>
    );
}

export default App;
