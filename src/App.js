import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import InitialView from "./components/InitialView";
class App extends Component {
    render() {
        return (
                <Provider store={store}>
                    <InitialView />
                </Provider>
        );
    }
}

export default App;