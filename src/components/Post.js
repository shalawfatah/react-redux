import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { postActions } from '../redux/actions'


const Post = () => {
    const {title} = useParams()
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    useEffect(()=> {
        dispatch(postActions)
    })
    const singlePost = state.items.find((item)=> {
        return item.title = title
    })
  
    return (
        <div>
            <Link to='/' >Home</Link>
            <h1>{singlePost.title}</h1>
            <p>{singlePost.body}</p>
        </div>
    )
}

export default Post
