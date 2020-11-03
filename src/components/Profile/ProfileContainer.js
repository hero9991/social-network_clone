import React, { useEffect } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getProfileThunk, getStatusThunk, setStatusThunk } from '../../Redux/profile-reducer'
import { withRouter } from 'react-router-dom'
import preloader from '../../assets/img/preloader.gif'
import withRedirect from '../../hoc/withRedirect'
import { compose } from 'redux'

const ProfileContainer = (props) => {
    useEffect(() => {
        let currentId = props.match.params.userId || props.myId
        props.getProfileThunk(currentId)
        props.getStatusThunk(currentId)
    }, [props.myId])

    if (props.isLoading === true) return <img src={preloader}/>
    return (
        <div>
            <Profile {...props} currentId={props.match.params.userId} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isLoading: state.profilePage.isLoading,
    status: state.profilePage.status,
    myId: state.auth.id
})


export default compose(
    connect(mapStateToProps, { getProfileThunk, getStatusThunk, setStatusThunk }),
    withRedirect,
    withRouter
)(ProfileContainer)

//const WithRedirectProfileContainer = withRedirect(ProfileContainer)
// const WithRouterProfileContainer = withRouter(WithRedirectProfileContainer)
// export default connect(mapStateToProps, { getProfileThunk, getStatusThunk })(WithRouterProfileContainer)