import React from 'react'
import Sidebar from './Sidebar'
import'./Home.css'

function Home() {
  return (
    <div className='home'>
        <div className="home-container">
            {/*sidebar */}
            <Sidebar/>
             {/*a container with whatsapp logo */}
             <div className="home-bg">
                <img src="./bg.png" alt="" />
             </div>
        </div>
    </div>
  )
}

export default Home