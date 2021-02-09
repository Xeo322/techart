import React from 'react'
import {useSelector} from 'react-redux'
import {materialType} from '../redux/actions'
import {Link} from 'react-router-dom'

export const MaterialType = ({cancel, dispatch, next}) => {
    const type =  useSelector(state => state.building)


    return (
        <div>
            <div className='block'>
                <div className='title'>
                    <p>Из чего будем строить</p>
                </div>
                <div className="content">
                    <ul onClick={e => dispatch(materialType(e.target.value))}>
                        <Link to='/size'>
                            <li value='2'>Шлакоблок</li>
                        </Link>
                        <Link  to='/size'>
                            {type === 1 ? <li value='1'>Кирпич</li> : <li value='4'>Металл</li>}
                        </Link>
                        <Link  to='/size'>
                            {type === 1 ? <li value='3'>Деревянный брус</li> : <li value='5'>Сендвич-панели</li>}
                        </Link>
                    </ul>
                </div>
            </div>
            <div className="button_group">
                <button onClick={() => cancel()}>Отмена</button>
                <button onClick={() => next('/size')}>Далее</button>
            </div>
        </div>
    )
}