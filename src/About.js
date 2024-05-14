import React from 'react'
import { Link} from 'react-router-dom'

function About() {
  return (
    <div><Link to="/contact">
    <button>contact</button>
  </Link>
  <h2>main</h2>
</div>
  )
}

export default About