import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css'
import MainIndex from './layouts/MainIndex'
import store from './store';
const App = () => {
    return (
        <React.Fragment>
            <Provider store={store}>
                <Router>
                    <MainIndex/>
                </Router>   
            </Provider>           
        </React.Fragment>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));