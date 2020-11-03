import React from 'react'
import styles from './Users.module.css'
import { NavLink } from 'react-router-dom'

const Users = (props) => {
    let numberOfPages = Math.ceil(props.totalNumberOfUsers / props.numberOfUsers)
    let pages = []
    for (let i = 1; i <= numberOfPages; i++) {
        pages.push(`${i} `)
    }

    return (
        <div className={styles.users_wrapper}>
            <div className={styles.users_top}>
                {pages.map(item => <span onClick={() => props.changePage(+item)} key={item}>{item}</span>)}
            </div>
            <div className={styles.users_main}>
                {props.users.map(item => <User {...item} followThunk={props.followThunk}
                    unfollowThunk={props.unfollowThunk} isDisabled={props.isDisabled} key={item.id} />)}
            </div>
        </div>
    )
}

const User = (props) => {
    return (
        <div className={styles.user}>
            <NavLink to={`/Profile/${props.id}`}>{props.name}</NavLink>
            {props.followed ?
                <button disabled={props.isDisabled.some(id => id === props.id)} onClick={() => props.unfollowThunk(props.id)}>unfollow</button>
                : <button disabled={props.isDisabled.some(id => id === props.id)} onClick={() => props.followThunk(props.id)}>follow</button>}
        </div>
    )
}
export default Users