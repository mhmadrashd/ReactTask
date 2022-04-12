import React, { useState, useEffect } from 'react'
import axios from 'axios'

import styles from './index.module.scss'
import { Link, useNavigate } from 'react-router-dom'

const Posts = () => {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setLoading(false)
        setPosts(res.data)
        setError('')
      })
      .catch(error => {
        setLoading(false)
        setPosts([])
        setError("something went wrong!")
      })
  })
  return (
    <div className={styles.Container}>
      
      <h1 className={styles.title}>The List of Posts</h1>
      <div className={styles.data}>
        {
          loading ? 'Loading' :
            posts.map(item => {
              return (
                <Link to={`/posts/${item.id}`} className={styles.item}>
                  <span> {item.id} - Post Title : </span>
                  <span>{item.title}</span>
                </Link>
              )
            })
        }
      </div>
    </div>
  )
}

export default Posts