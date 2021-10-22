import React, {useState, useEffect }from 'react'
import axios from 'axios';

function News (props){

  const [newsPosts, setNewsPosts] = useState([]);
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  console.log('news props',props)
  
  const getNews = async () => {
      return axios.get(`${serverUrl}/api/newsletter`)
        .then(response =>{
          console.log(response.data)
          setNewsPosts(response.data)
        })
  };
  useEffect(() =>{
    getNews();
  },[]);

  return(
    <div className='news'>
    <h2>News</h2>
    <p>This will become like our Bulitin or Newsletter space with community updates and news about our projects and status.</p>
    { 
    Object.keys(newsPosts).map((post,idx) =>(
      <div key= {idx} className="newsPosts">
        <h2> '{newsPosts[post].newsTitle} '</h2>
        <p>' {newsPosts[post].newsContent} '</p>
        <p classname="timestamp">'timestamp:{newsPosts[post].newsDate}'</p>
        <p className="author">'PostedBy:{newsPosts[post].postedBy}'</p>
      </div>
    ))
    }
    </div>
  )
}

export default News;