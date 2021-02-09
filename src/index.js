import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import thunk from 'redux-thunk'
import {applyMiddleware, compose, createStore} from 'redux'
import {rootReducer} from './redux/rootReducer'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
const store = createStore(rootReducer,compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, document.getElementById('root'))

