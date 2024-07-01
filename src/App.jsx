 import React from 'react'
import Sidebars from './components/Sidebars'
import Player from './components/Player'
import Display from './components/Display'
 
 const App = () => {
   return (
     <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
            <Sidebars/>
            <Display/> 
      </div>
      <Player/>
     </div>
   )
 }
 
 export default App