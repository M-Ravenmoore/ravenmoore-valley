import React from 'react';
import {NewsList} from './newsList';

function News(props){
  
  return(
    <div id="news" className="bulliten">
      <article className="content-A">
        <h2>Ravenmoore Valley Bulliten</h2>
        <p> Check here for the newest updates and goings on of ravenmoore valley and its venders. From where we are going to be vending to New products updates are Many!
        </p>
      </article>

      <React.Fragment>
        <NewsList />
      </React.Fragment>
    </div>  
  )
}

export default News;




