import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './index.module.scss'

const OneUser = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {
                setLoading(false)
                setUser(res.data)
                setError('')
            })
            .catch(error => {
                setLoading(false)
                setUser([])
                setError("something went wrong!")
            })
    })

    return (
        <div className={styles.Container}>
            <div className={styles.btns}>
                <button onClick={() => navigate(`/viewPost/${id}`)}>View User Posts</button>
                <button onClick={() => navigate(`/createPost/${id}`)}>Create Post</button>
            </div>
            {
                loading ? 'Loading' : user.id ?
                    <>
                        <div className={styles.item}>
                            <span>ID :</span>
                            <span>{user.id}</span>
                        </div>
                        <div className={styles.item}>
                            <span>Name :</span>
                            <span>{user.name}</span>
                        </div>
                        <div className={styles.item}>
                            <span>User Name :</span>
                            <span>{user.username}</span>
                        </div>
                        <div className={styles.item}>
                            <span>E-mail :</span>
                            <span>{user.email}</span>
                        </div>
                        <div className={styles.item}>
                            <span>User Phone :</span>
                            <span>{user.phone}</span>
                        </div>
                        <div className={styles.item}>
                            <span>User Website :</span>
                            <span>{user.website}</span>
                        </div>
                    </> : ` user not found     - __ -`
            }
        </div>
    )
}

export default OneUser