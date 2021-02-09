import {
    BUILDING_TYPE,
    INCREMENT_COUNT,
    GET_DATA,
    MATERIAL_TYPE,
    BUILDING_HEIGHT, BUILDING_SIZE, CLEAR_STORE
} from './types'

export function clearStore() {
    return {
        type: CLEAR_STORE
    }
}

export function getData(data) {
    return {
        type: GET_DATA,
        payload: (data)
    }
}

export function buildingType(data) {
    return dispatch => {
        dispatch({
            type: BUILDING_TYPE,
            payload: data
        })
        dispatch(incrementCount())
    }
}

export function materialType(data) {
    return dispatch => {
        dispatch({
            type: MATERIAL_TYPE,
            payload: data
        })
        dispatch(incrementCount())
    }
}

export function buildingHeight(data) {
    return dispatch => {
        dispatch({
            type: BUILDING_HEIGHT,
            payload: data
        })
        dispatch(incrementCount())
    }
}

export function incrementCount() {
    return {
        type: INCREMENT_COUNT
    }
}

export function buildingSize(data) {
    return dispatch => {
        dispatch({
            type: BUILDING_SIZE,
            payload: data
        })
    }
}

