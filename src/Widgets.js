import React from 'react'
import './Widget.css'
function Widgets() {
  return (
    <div className='widgets'>
      <iframe
        src='https://web.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId&_rdc=1&_rdr'
        width='340'
        height="100%"
        style={ {
          border: "none", overflow:
            "hidden"
        } }
       scrolling ="no"
        frameborder="0"
        allowTransparency="true"
        allow='encrypted-media'
      ></iframe>      
    </div>
  )
}

export default Widgets
