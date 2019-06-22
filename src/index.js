import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css'
import MainIndex from './layouts/MainIndex'
import store from './store';
const App = () => {
    return (
        <React.Fragment>
            <Provider store={store}>
                <MainIndex/>
            </Provider>           
        </React.Fragment>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));