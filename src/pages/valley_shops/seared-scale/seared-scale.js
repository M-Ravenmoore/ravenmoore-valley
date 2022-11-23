import React from 'react';

import Projects from './projects/projects';


function SearedScale (props){

  return(
    <div id='seared-scale'>
      <section id='intro' className="content-A">
        <h2>The Seared Scale</h2>

        <p>Welcome to My humble workshop it is where I design and create my public projects.  below you will find listed the current projects in the works follow the buttons to find out more.</p>
      </section>
      <section id='Projects'>
       <Projects />
      
      </section>

    </div>

  )
}

export default SearedScale;