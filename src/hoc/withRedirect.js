import React from 'react'
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

const withRedirect = (Component) => {
    const withRedirectInner = (props) => {
        if (props.isAuth) return <Component {...props}/>
        else return <Redirect to='/Login'/>
    }
    return connect(mapStateToProps)(withRedirectInner)
}

export default withRedirect
