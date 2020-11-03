import { setAuth } from '../api/api'

const GET_AUTH = 'GET_AUTH'

const initialState = {
    id: '',
    login: '',
    email: '',
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_AUTH:
            return { ...state, ...action.data, isAuth: true }
        default: return state
    }
}

const getAuth = (id, email, login) => ({
    type: GET_AUTH,
    data: { id, email, login }
})

export const getAuthThunk = () => (dispatch) => {
    setAuth().then(response => {
        if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data
            dispatch(getAuth(id, email, login))
        }
    })
}

// export const getAuthUser = () => {
//     return (dispatch) => {
//         authAPI.getAuthUser().then(data => {
//             if (data.resultCode === 0) {
//                 let { id, email, login } = data.data;
//                 dispatch(setAuthUser(id, email, login));
//             }
//         });
//     }
// }

export default authReducer