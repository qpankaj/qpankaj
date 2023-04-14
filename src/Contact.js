import React from 'react'

import { useState } from 'react'

function Contact() {
  const[count , setcount  ] = useState(5)
    
  function updateCounter()
  {
    setcount(Math.floor(Math.random()*100))
  }
  return(
    <div className='App'>
      <h1>{count}</h1>
       
       <button onClick={updateCounter}>
            me to update counter
       </button>
    </div>
  );
  


}

export default Contact