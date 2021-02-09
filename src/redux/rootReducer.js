import {
    INCREMENT_COUNT,
    BUILDING_TYPE,
    GET_DATA,
    MATERIAL_TYPE,
    BUILDING_HEIGHT, BUILDING_SIZE, CLEAR_STORE
} from './types'

const initialState = {
    count: 1,
    building: null,
    height: null,
    material: null,
    sizeX: null,
    sizeY: null
}


export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return state = action.payload
        case BUILDING_TYPE:
            return {...state, building: action.payload}
        case BUILDING_HEIGHT:
            return {...state, height: action.payload}
        case MATERIAL_TYPE:
            return {...state, material: action.payload}
        case BUILDING_SIZE:
            return {...state, sizeX: action.payload.sizeX, sizeY: action.payload.sizeY}
        case INCREMENT_COUNT:
            return {...state, count: state.count + 1}
        case CLEAR_STORE:
            return {...state, count: 1, building: null,height: null, material: null, sizeX: null, sizeY: null}
        default:
            return state
    }
}