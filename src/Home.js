import React from 'react'
import { Link} from 'react-router-dom'
import Contact from './Contact'
import About from './About'
import Arrayadd from './Arrayadd'


function Home() {
  return (
    <div>
      <Contact/>
    <div>
      <Link to="/about">
        <button>About</button>
      </Link>
      <About/>
      <Arrayadd />
    </div>
    </div>
  )
}

export default Home