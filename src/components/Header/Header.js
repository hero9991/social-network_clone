import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/img/logo.png'
import login from '../../assets/img/login.png'
import logout from '../../assets/img/logout.png'
import dialogs from '../../assets/img/dialogs.png'
import users from '../../assets/img/users.png'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (
        <div className={styles.header_wrapper}>
            <div>
                <NavLink to='/Profile'>
                    <img className={styles.logo} src={logo} alt='' />
                </NavLink>
            </div>
            <div className={styles.header_center}>
                <NavLink to='/Dialogs'>
                    <img className={styles.logo} src={dialogs} alt='' />
                </NavLink>
                <NavLink to='/Users'>
                    <img className={styles.logo} src={users} alt='' />
                </NavLink>
            </div>
            <div className={styles.login}>
                <NavLink className={styles.login_text} to='/Login'>
                    {props.isAuth ? <>LOGIN <img className={styles.logo} src={login} alt='' /></>
                    : <>LOGOUT <img className={styles.logo} src={logout} alt='' /></>}
                </NavLink>
            </div>
        </div>
    )
}

export default Header   