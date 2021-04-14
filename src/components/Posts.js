import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { postActions } from '../redux/actions'

const Posts = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  useEffect(()=> {
    dispatch(postActions)
  })
    return (
        <div>
          <h1>POSTS</h1>
          {state.items.map((item)=> {
            return (
              <Link to={`/${item.title}`}>
              <h3>{item.title}</h3>
              </Link>
            )
          })}
        </div>
    )
}

export default Posts
