import React from "react";
// import { BrowserRouter } from "react-router-dom";
import Router from './router/Router'
import { Provider } from 'react-redux';
import store from "./store/store";

const App = () => {

    return (
        <main>
            <Provider store={store}>
                {/* <BrowserRouter> */}
                <Router />
                {/* </BrowserRouter> */}
            </Provider>
        </main>
    )
}

export default App