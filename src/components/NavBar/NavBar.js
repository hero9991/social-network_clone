import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={styles.navBar_wrapper}>
            <NavLink to='/Profile'> Profile</NavLink>
            <NavLink to='/Users'> Users</NavLink>
            <NavLink to='/Dialogs'> Dialogs</NavLink>  
        </div>
    )
}

export default NavBar