import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Page from './Page'



const App=()=> {
  return (
    <Router>
      <div>
      <Routes>
       
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      
      <Route path='/page' element={<Page/>}/>

      </Routes>
      </div>

    </Router>
    
        
  )
}

export default App
