import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './index.module.scss'


const ViewPost = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
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
      <button onClick={() => navigate(`/authors/${id}`)} className={styles.goBack}>Go Back</button>
      <div className={styles.data}>
        {
          loading ? 'Loading' :
            posts.map(item => {
              return (
                <div className={styles.item}>
                  <span> <span>ID :</span> {item.id} </span>
                  <span> <span>Post Title :</span> {item.title} </span>
                  <span> <span> Post Body :</span> {item.body}</span>
                </div>
              )
            })
        }
      </div>
    </div>
  )
}

export default ViewPost



