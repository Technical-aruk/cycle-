import React from 'react'
import cycle from './images/clip-message-sent 1.png'
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css'


function Page() {
  return (
    <div classname="most">
      <div className='row'>
        <div className='col-6 col1'>
        <h1> digital</h1>
    <h2>ARTIFICAL INTELLIGANCE DRIVING<br></br>result for travel industry</h2>
    <p classname='to'>welcome back! please login to your account</p>
    <p className='fo'>* email address</p>
    <div>

   <div className='to'>
    
   <form>
    Email address
    <input className='so' type="email"/>
    <div className='eo'>
      password
      <input className='so' type="password"/>
    </div>
    <div >
    <input className='e' type="checkbox" />
<label> remember me</label>

    <p className='vine'>forgot password?</p>
    </div>
    <div>
      <button className='w'>login</button>
      <button className='f'>signup</button>
    </div>
    <div className='sa'>
      <p>OR login with</p>
     
    </div>
    <div className='do'>
      facebook  linkedin  google
    </div>
    
    
  
    </form>


    </div>
    </div>
    

        </div>
        <div className='col-6 col2'>
        <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">about us</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">blog</a>
  </li>
  <li class="nav-item">
  <a class="nav-link" href="#">pricing</a>
  </li>
</ul>
          
          <img src={cycle}/>
        </div>
        </div> 
        </div> 
        
      

    
    
    
    
  )
}

export default Page