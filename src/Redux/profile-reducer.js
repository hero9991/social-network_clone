import {getProfile, getStatus, setStatus} from '../api/api'

const ADD_PROFILE = 'ADD_PROFILE'
const LOAD = 'LOAD'
const GET_STATUS = 'GET_STATUS'


let initialState = {
    profile: null,
    isLoading: true,
    status:''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROFILE:
            return {...state, profile: action.profile, }
        case LOAD:
            return {...state, isLoading: action.isLoading}
        case GET_STATUS:
            return {...state, status: action.status}
        default: return state
    }
}

const addProfile = (profile) => ({
    type: ADD_PROFILE,
    profile
})
const load = (isLoading) => ({
    type: LOAD,
    isLoading
})
const getUserStatus = (status) => ({
    type: GET_STATUS,
    status
})


export const getProfileThunk = (userId) => (dispatch) =>{
    dispatch(load(true))
    getProfile(userId).then(response => {
        dispatch(load(false))
        dispatch(addProfile(response.data))
    })
}
export const getStatusThunk = (userId) => (dispatch) => {
    getStatus(userId).then(response => {
        dispatch(getUserStatus(response.data))
    })
}
export const setStatusThunk = (status) => (dispatch) => {
    setStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getUserStatus(status))
        }
    })
}

export default profileReducer