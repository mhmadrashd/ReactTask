import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './index.module.scss'

const CreatePost = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [userId, setUserID] = useState("")
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const data = {
        userId,
        title,
        body
    }
    const handelSubmit = ( e) => {
        e.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/posts" , data)
        .then(res => {
            console.log(res.data)
        })
        .catch(error => {
            console.log(error)
        })
        
    }

  return (
    <div className={styles.Container}>
        <button className={styles.goBack} onClick={() => navigate(`/authors/${id}`)}>Go Back</button>
        <form onSubmit={handelSubmit}>
            <span className={styles.title}>Id : {id} </span>
            <input type="text" placeholder='enter the User ID' onChange={(e) => setUserID(e.target.value)} />
            <input type="text" placeholder='enter the title' onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder='enter the body' onChange={(e) => setBody(e.target.value)}/>
            <button type='submit' className={styles.submitBtn} >Submit</button>
        </form>
    </div>
  )
}

export default CreatePost