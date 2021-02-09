import React, {useState} from 'react'
import {buildingHeight} from '../redux/actions'

export const BuildingHeight = ({cancel, dispatch, history}) => {
    const [state, setState] = useState()

    const inputHandler = (data) => {
        setState(data)
    }


    const next = (data) => {
        dispatch(buildingHeight(data))
        history.push('/material')
    }

    return (
        <div>
            <div className='block'>
                <div className='title'>
                    <p>Количество этажей:(число)</p>
                </div>
                <div className='content flex'>
                    <input type='text' onChange={e => inputHandler(Number(e.target.value))}/>
                </div>
            </div>
            <div className="button_group">
                <button onClick={() => cancel()}>Отмена</button>
                <button onClick={() => next(state)}>Далее</button>
            </div>
        </div>
    )
}