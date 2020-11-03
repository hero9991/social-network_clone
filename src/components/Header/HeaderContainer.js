import React, { useEffect } from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { getAuthThunk } from '../../Redux/auth-reducer'


const HeaderContainer = (props) => {
    useEffect(() => {
        props.getAuthThunk()
    },[])

    return (
            <Header isAuth={props.isAuth}/>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {getAuthThunk})(HeaderContainer)