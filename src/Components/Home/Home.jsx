import React from 'react'
import './Home.css'
import robot from '../../Assets/robo.jpg'
import Typewriter from './Typewriter'


const Home = () => {
  return (
    <section className='home'>
      
     <div className="home-txt">
     <h1>Cyborg</h1>
     
     <Typewriter className='typewriter'/>
     <h3>यन्त्रज्ञानं भविष्यनिर्माणं</h3>

     </div>

     <div className="home-img">
     <img src={robot} alt="Robot" />
     </div>

    </section>
  )
}

export default Home;