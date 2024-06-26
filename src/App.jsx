import React from 'react'
import "./app.scss"
import movies from './lib/store'
import Card from './components/card/Card'
import Navbar from './components/navbar/Navbar'
import Watched from './components/watched/Watched'




const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='cardContainer'>
          {
            movies.map((movie)=>(
              <Card movie={movie} key={movie}/>
            ))
          }
      </div>
   <Watched/>
      
    </div>
  )
}

export default App