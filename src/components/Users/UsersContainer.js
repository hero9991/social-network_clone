import React, { useEffect } from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import { getUsersThunk, changePage, followThunk, unfollowThunk } from '../../Redux/users-reducer'
import preloader from '../../assets/img/preloader.gif'
import withRedirect from '../../hoc/withRedirect'
import { compose } from 'redux'

const UsersContainer = (props) => {
    useEffect(() => {
        props.getUsersThunk(props.numberOfUsers, props.pageNumber)
    }, [props.pageNumber])
    
    if (props.isLoading === true) return <img src={preloader}/>
    return (
        <div>
            <Users {...props} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    totalNumberOfUsers: state.usersPage.totalNumberOfUsers,
    numberOfUsers: state.usersPage.numberOfUsers,
    pageNumber: state.usersPage.pageNumber,
    isLoading: state.usersPage.isLoading,
    isDisabled: state.usersPage.isDisabled
})

export default compose(
    connect(mapStateToProps, {getUsersThunk, changePage, followThunk, unfollowThunk}),
    withRedirect
)(UsersContainer)

// const WithRedirectUsersContainer = withRedirect(UsersContainer)\
// export default connect(mapStateToProps, {getUsersThunk, changePage, followThunk, unfollowThunk})(WithRedirectUsersContainer)