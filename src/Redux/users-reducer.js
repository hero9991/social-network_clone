const { getUsers, followUser, unfollowUser } = require("../api/api")

const SET_USERS = 'SET_USERS'
const SET_NUMBER_OF_PAGE = 'SET_NUMBER_OF_PAGE'
const CHANGE_PAGE = 'CHANGE_PAGE'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const LOAD = 'LOAD'
const DISABLE = 'DISABLE'
const ENABLE = 'ENABLE'

let initialState = {
    users: [],
    totalNumberOfUsers: 0,
    numberOfUsers: 100,
    pageNumber: 2,
    isLoading: true,
    isDisabled: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.users }
        case SET_NUMBER_OF_PAGE:
            return { ...state, totalNumberOfUsers: action.totalNumberOfUsers }
        case CHANGE_PAGE:
            return { ...state, pageNumber: action.pageNumber }
        case FOLLOW:
            return {
                ...state, users: state.users.map(item => {
                    return item.id === action.userId ? { ...item, followed: true } : item
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(item => {
                    return item.id === action.userId ? { ...item, followed: false } : item
                })
            }
        case LOAD:
            return { ...state, isLoading: action.isLoading }
        case DISABLE:  
            return { ...state, isDisabled: [...state.isDisabled, action.userId]}
        case ENABLE:
            return { ...state, isDisabled: state.isDisabled.filter((item) => item !== action.userId) }
        default: return state
    }
}

const setUsers = (users) => ({
    type: SET_USERS,
    users
})
const setTotalNumberOfUsers = (totalNumberOfUsers) => ({
    type: SET_NUMBER_OF_PAGE,
    totalNumberOfUsers
})
export const changePage = (pageNumber) => ({
    type: CHANGE_PAGE,
    pageNumber
})
const follow = (userId) => ({
    type: FOLLOW,
    userId
})
const unfollow = (userId) => ({
    type: UNFOLLOW,
    userId
})
const load = (isLoading) => ({
    type: LOAD,
    isLoading
})
const disable = (userId) => ({
    type: DISABLE,
    userId,
})
const enable = (userId) => ({
    type: ENABLE,
    userId,
})

export const getUsersThunk = (numberOfUsers, pageNumber) => (dispatch) => {
    dispatch(load(true))
    getUsers(numberOfUsers, pageNumber).then(response => {
        dispatch(load(false))
        dispatch(setUsers(response.data.items))
        dispatch(setTotalNumberOfUsers(response.data.totalCount))
    })
}
export const followThunk = (userId) => (dispatch) => {
    dispatch(disable(userId))
    followUser(userId).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(enable(userId))
            dispatch(follow(userId))
        }
    })
}
export const unfollowThunk = (userId) => (dispatch) => {
    dispatch(disable(userId))
    unfollowUser(userId).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(enable(userId))
            dispatch(unfollow(userId))
        }
    })
}

export default usersReducer