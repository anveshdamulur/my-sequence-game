import { createStore } from "redux"; 
import reducers from "./reducers/index";
const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // extension to see the redux dev tool in the chrome browser
)
export default store;