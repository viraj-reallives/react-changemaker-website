import React from 'react'
import "../Not-Founnd-page/NotFound.css"
import Home from '../Pages/Home'
import { Link } from 'react-router-dom'



const NotFound = () => {
  return (
 <section className="page_404">
      <div className="page_404_container">
        
        <div className="four_zero_four_bg"></div>

        <div className="contant_box_404">
          <h3>Look like you're lost</h3>
          <p>the page you are looking for not avaible!</p>

         <Link to="/Home" className="link_404">Home</Link>

          {/* <LINK path="/" className="link_404" > Home</LINK> */}

          
        </div>

      </div>
    </section>
  )
}

export default NotFound
