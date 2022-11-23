import React from 'react';
import { ArtistList } from './artistList';
// import React, {useState, useEffect} from 'react';
// // import axios from 'axios';

// import { Card } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';

function Artists(props){
  
  // const [artisansInfo, setArtisansInfo] = useState([]);
  // const serverUrl = process.env.REACT_APP_SERVER_URL;
  // console.log('artists',artists)
  
  // const getArtists = async () => {
  //   return axios.get(`${serverUrl}/api/artisans`)
  //   .then(response =>{
  //     // console.log(response.data)
  //     setArtisansInfo(response.data)
  //     // HOW to send this info to state?????
  //   })
  // };
  
  // useEffect(() =>{
  //   getArtists();
//   // },[]);
// console.log("looking for info to send to artistSlice",artisansInfo)

  return(
    <div id="artisans" className="Directory">
      <article className="content-A">
        <h2>Ravenmoore Valley Artisan Directory</h2>
        <p> These are the people who build make and create the works for sale at The Ravenmoore Valley Marketplace. Feel free to check out our charts of skills and projects and feel free to reach out with any questions.</p>
      </article>

      <React.Fragment>
        <ArtistList />
      </React.Fragment>
    </div>  
  )
}

export default Artists;




