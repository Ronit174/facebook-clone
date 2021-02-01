import React from 'react';
import Story from './Story';
import './StoryReel.css'

function StoryReel() {
    return (
        <div className="storyReel">
         <Story 
          image="https://images.unsplash.com/photo-1496024840928-4c417adf211d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          profileSrc="https://qph.fs.quoracdn.net/main-thumb-563414826-200-nodvuyhbsnmygwplbujbpaavimvvhytd.jpeg"
          title="Ronit Bhardwaj" />

          <Story 
           image="https://images.indulgexpress.com/uploads/user/imagelibrary/2019/4/18/original/21b995d69ab7a998ebd01f81164cec61.jpg" 
           profileSrc="https://upload.wikimedia.org/wikipedia/commons/d/dc/Ahsaas_Channa.jpg"
           title="Ahsaas Channa" />
        
        <Story 
          image="https://images.unsplash.com/photo-1593760603958-78c8ff97e32f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
          profileSrc="https://image.cnbcfm.com/api/v1/image/105707896-1548825776604ritesh.jpg?w=1910&amp;h=1000"
          title="Ritesh Agarwal" />

          <Story 
           image="https://images.unsplash.com/photo-1523728778454-06bedf489d10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
           profileSrc="https://image.cnbcfm.com/api/v1/image/105530819-1540492177232gettyimages-1052308194.jpeg?v=1577969212&w=1400&h=950"
           title="Richard Branson" />

        </div>
    )
}

export default StoryReel;
