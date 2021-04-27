import '../../App.css'
import React from 'react';
import './About.css';
function About(){
    return(
        <div className='about-container'>
         <h1>About us</h1>
         <div className='content-container'>
         <ul>
         <li>BRAVE FOREST is an application which helps you to connect with the companies all over the world who believes in sustainable business.</li>
         <li>Using BRAVE FOREST is quite easy, you just have to search for the company where you also have option to filter the result.</li>
         <li>If you are a company and want to add your business on BRAVE FOREST, then there is also an option for that.</li>
         </ul>
         </div>
         <div className='line'>
         <p>Our mission is to promote sustainability in business and to enhance the idea of GREEN TECH.</p>
         </div>
         <div className='contact'>
         <h2>For any queries, feel free to reach us!</h2>
         <p><a href="https://forms.office.com/r/rrXdep1q4H">Contact Us</a></p>
         </div>
         </div>
        
    )
}

export default About;