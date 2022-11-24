import React,{ useEffect } from 'react'
// , {useState, 
import { useSelector, useDispatch } from 'react-redux'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {ReactionButtons} from '../../componets/reaction-btns/ReactionButtons'

import { selectAllNewsPosts, fetchNews } from './newsSlice'

const NewsExcerpt = ({ post }) => {
  return (
    <article className="post-excerpt">
      <h3>{post.newsTitle}</h3>
      <div>
        <Card.Text id="postAuthor">{post.postedBy}</Card.Text>
        <Card.Text id="postDate">{post.newsDate}</Card.Text>
      </div>
      <p className="post-content">{post.newsContent.substring(0, 100)}</p>

      <ReactionButtons post={post} />
      <Link to={`/posts/${post.newsId}`} className="button muted-button">
        View Post
      </Link>
    </article>
  )
}

export const NewsList = () => {
  const dispatch = useDispatch()
  const newsPosts = useSelector(selectAllNewsPosts)
   
  const postStatus = useSelector(state => state.newsPosts.status)
  const error = useSelector(state => state.newsPosts.error)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchNews())
    }
  }, [postStatus, dispatch])
  
  let content;
  
  if (postStatus === 'loading') {
    content = <h2>"Loading..."  </h2>
  } else if (postStatus === 'succeeded') {
    // Sort posts in reverse chronological order by datetime string
    const orderedPosts = newsPosts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))
    
    content = orderedPosts.map(post => (
      <NewsExcerpt key={post.newsId} post={post} />
    ))
  } else if (postStatus === 'failed') {
    content = <div>{error}</div>
  }
  console.log(newsPosts,"i should be api data")
  
  const renderNews = newsPosts.map((post) =>(
    <Card className='news'>
      <div key= {post.newsId} className="news-post">
        <Card.Img className='postImg'  src={post.imgSrc} alt={post.imgDesc} />
        <Card.Body>
          <Card.Title id="postTitle">{post.newsTitle}</Card.Title>
          <Card.Subtitle id="postSubTitle">{post.newsTagline}</Card.Subtitle>
          <Card.Text id="postContent">{post.newsContent}</Card.Text>
          <Card.Text id="postAuthor">{post.postedBy}</Card.Text>
          <Card.Text id="postDate">{post.newsDate}</Card.Text>
        </Card.Body>
      </div>
      </Card>
  ));
  return (
    <section className="artist-cards">
      {renderNews}
    </section>
  )
}