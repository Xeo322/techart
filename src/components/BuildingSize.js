import React, {useState} from 'react'
import {buildingSize} from "../redux/actions";

export const BuildingSize = ({cancel, dispatch, history}) => {
    const [state, setState] = useState({
        sizeX: null,
        sizeY: null
    })


    const next = () => {
        dispatch(buildingSize(state))
        history.push('/final')
    }


    return (
        <div>
            <div className='block'>
                <div className='title'>
                    <p>Размер стен(В метрах)</p>
                </div>
                <div className="content flex">
                    <input type='text' placeholder='Ширина' onChange={e => setState({...state, sizeX: Number(e.target.value)})}/>
                    <span>&#10005;</span>
                    <input type="text" placeholder='Высота' onChange={e => setState({...state, sizeY: Number(e.target.value)})}/>
                </div>
            </div>
            <div className="button_group">
                <button onClick={() => cancel()}>Отмена</button>
                <button onClick={() => next()}>Далее</button>
            </div>
        </div>
    )
}