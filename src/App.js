import React, {useEffect} from 'react'
import './styles/main.scss'
import {Switch, Route, useHistory} from 'react-router-dom'
import {BuildingType} from './components/BuildingType'
import {BuildingHeight} from './components/BuildingHeight'
import {clearStore, getData, incrementCount} from './redux/actions'
import {useDispatch, useSelector, useStore} from 'react-redux'
import {MaterialType} from './components/MaterialType'
import {BuildingSize} from './components/BuildingSize'
import {FinalComponent} from './components/FinalComponent'


function App() {
    window.onpopstate = function () {
        history.goForward()
    }

    const history = useHistory()
    const dispatch = useDispatch();
    const count = useSelector(state => state.count)
    const store = useStore()
    const state = store.getState()

    const cancelHandler = () => {
        dispatch(clearStore())
        history.push('/')
    }

    const next = (path) => {
        dispatch(incrementCount())
        history.push(path)
    }

    useEffect(() => {
        if (sessionStorage.getItem('data')) {
            const data = JSON.parse(sessionStorage.getItem('data'))
            dispatch(getData(data))
        }
    }, [])

    useEffect(() => {
        sessionStorage.setItem('data', JSON.stringify(state))
    }, [state])


    return (
        <div className="App">
            <header className='header'>
                <h1>Калькулятор цены конструкций</h1>
            </header>
            <div className='container'>
                <h5 className='step'>Шаг {count}</h5>
                <Switch>
                    <Route exact path='/'><BuildingType cancel={cancelHandler} dispatch={dispatch} next={next} history={history}/></Route>
                    <Route path='/height'><BuildingHeight cancel={cancelHandler} dispatch={dispatch} history={history}/></Route>
                    <Route path='/material'><MaterialType cancel={cancelHandler} dispatch={dispatch} next={next} history={history}/></Route>
                    <Route path='/size'><BuildingSize cancel={cancelHandler} dispatch={dispatch} history={history}/></Route>
                    <Route path='/final'><FinalComponent cancel={cancelHandler}/></Route>
                </Switch>
            </div>
        </div>

    )
}

export default App;
