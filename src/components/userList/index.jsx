import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './index.module.scss'

const UserList = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setLoading(false)
                setUsers(res.data)
                setError('')
            })
            .catch(error => {
                setLoading(false)
                setUsers([])
                setError("something went wrong!")
            })
    })
    return (
        <div className={styles.Container}>
            <h1 className={styles.title}>The List of Users</h1>
            <div className={styles.data}>
                {
                    loading ? 'Loading' :
                        users.map(item => {
                            return (
                                <div className={styles.item}>
                                    <span>User Name : </span>
                                    <span>{item.username}</span>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default UserList