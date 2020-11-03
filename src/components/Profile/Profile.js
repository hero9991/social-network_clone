import React, { useState, useEffect } from 'react'
import styles from './Profile.module.css'

const Profile = (props) => {
    return (
        <div className={styles.profile_wrapper}>
            <img src={props.profile ? props.profile.photos.large : null} alt='' />
            <div className={styles.description}>
                <div className={styles.description__inner}>
                    <div className={styles.fullName}>
                        Full name: {props.profile ? props.profile.fullName : null}
                    </div>
                    <div className={styles.aboutMe}>
                        About me: {props.profile ? props.profile.aboutMe : null}
                    </div>
                    <div className={styles.jobStatus}>
                        Job status: {props.profile ? props.profile.lookingForAJobDescription : null}
                    </div>
                    <Status status={props.status} setStatusThunk={props.setStatusThunk} currentId={props.currentId}/>
                </div>
            </div>
        </div>
    )
}

const Status = (props) => {
    let [status, setStatus] = useState(props.status)
    let [isStatusWrited, switchHandler] = useState('true')

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const inputHandler = () => {
        switchHandler(true)
        props.setStatusThunk(status)
    }
    const spanHandler = () => {
        if (props.currentId !== undefined) return null
        switchHandler(false)
    }
    const inputChanger = (e) => {
        setStatus(e.target.value)
    }
    return <div className={styles.status}>
        {isStatusWrited ?
            <span onClick={spanHandler}>status: {props.status}</span>
            : <input onBlur={inputHandler} onChange={inputChanger} autoFocus={true} value={status}/>}
    </div>
}

export default Profile