import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {Loader} from "./Loader"

export const FinalComponent = ({cancel}) => {
    const [state, setState] = useState({
        result: '',
        message: '',
        loading: true
    })


    const store = useSelector(state => ({
        building: state.building,
        height: state.height,
        material: state.material,
        sizeX: state.sizeX,
        sizeY: state.sizeY,
    }))

    useEffect(() => {
        const fetchData = async () => {
            const request = await fetch(
                `https://data.techart.ru/lab/json/?building=${store.building}&height=${store.building === 2 ? 1 : store.height}&material=${store.material}&sizex=${store.sizeX}0&sizey=${store.sizeY}`)
            const response = await request
            const data = await response.json()
            setTimeout(() => {
                setState({...state, result: data.result, message: data.message, loading: false})
            }, 2000)
        }
        fetchData()
    }, [])


    return (
        <div>
            {state.loading ? <Loader/> :
                <div>
                    <div className='block'>
                        <div className='title'>
                            {state.result === 'ok' ? <p>Успешно</p> : <p>Ошибка</p>}
                        </div>
                        <div className='content flex'>
                            <p>{state.message}</p>
                        </div>
                    </div>
                    <button className='button_single' onClick={() => cancel()}>Новый расчёт</button>
                </div>
            }
        </div>

    )
}