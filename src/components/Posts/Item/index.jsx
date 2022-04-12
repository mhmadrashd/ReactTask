import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './index.module.scss'

const OnePost = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [post, setPost] = useState({})

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        setLoading(false)
        setPost(res.data)
        setError('')
      })
      .catch(error => {
        setLoading(false)
        setPost([])
        setError("something went wrong!")
      })
      console.log(id)
  })
  return (
    <div className={styles.Container}>
      {
        loading ? 'Loading' : post.id ?
          <>
            <div className={styles.item}>
              <span>ID :</span>
              <span>{post.id}</span>
            </div>
            <div className={styles.item}>
              <span>User ID :</span>
              <span>{post.userId}</span>
            </div>
            <div className={styles.item}>
              <span>Title :</span>
              <span>{post.title}</span>
            </div>
            <div className={styles.item}>
              <span>Body :</span>
              <span>{post.body}</span>
            </div>
          </> : ` user not found     - __ -`
      }
    </div>
  )
}

export default OnePost