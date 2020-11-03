import thunk from 'redux-thunk';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: profileReducer } = require("./profile-reducer");

const rootReducer = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store