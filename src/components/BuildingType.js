import React from 'react'
import {buildingType} from '../redux/actions'
import {Link} from 'react-router-dom'

export const BuildingType = ({cancel, dispatch, next}) => {



    return (
        <div>
            <div className='block'>
                <div className='title'>
                    <p>Что будем строить</p>
                </div>
                <div className='content'>
                    <ul onClick={e => dispatch(buildingType(e.target.value))}>
                        <Link to='/height'>
                            <li value='1'>Жилой дом</li>
                        </Link>
                        <Link to='/material'>
                            <li value='2'>Гараж</li>
                        </Link>
                    </ul>
                </div>
            </div>
            <div className="button_group">
                <button onClick={() => cancel()}>Отмена</button>
                <button onClick={() => next('/material')}>Далее</button>
            </div>
        </div>
    )
}