import React from 'react';

import Projects from './Projects/projects';


function Workshop (props){

  return(
    <div id='workshop'>
      <section id='intro'>
        <h2>Muninn's Workshop</h2>

        <p>Welcome to My humble workshop it is where I design and create my public projects.  below you will find listed the current projects in the works follow the buttons to find out more.</p>
      </section>
      <section id='Projects'>
       <Projects />

      </section>


    </div>

  )
}

export default Workshop;