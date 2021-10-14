import React from 'react'

import HuginnProjects from './Projects/huginn-projects';

function Menagerie (props){

  return(
<div id='menagerie'>
 <section id='intro' className="content-A">
        <h2>Menagerie</h2>
        
        <p>Huginn (Rebecca) Ravenmoores Menagerie of Yarn and fluf. Here live the wonderfull creations that she makes for herself and others check them all out this EVER GROWING collecion of cute.</p>
      </section>
      <section id='Projects-Huginn'>
       <HuginnProjects />

      </section>
</div>
  )
}

export default Menagerie;