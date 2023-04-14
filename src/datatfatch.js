import React from 'react'
import { useEffect, useState } from 'react';




function Datatfatch() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((result) => {
      result.json().then((resp) => {

        // console.warn(result,result)
        setData(resp)
      })
    })
  }, [])

  console.log(data)



  return (
    <div className='datafatch'>

      <h1>Get Api</h1>
      <table border='1'>
        <tr>
          <td>id</td>
          <td>title</td>
          <td>completed</td>
          <td>userid</td>
        </tr>
        {
          data.map((item) =>

          <tr>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.completed}</td>
          <td>{item.userid}</td>
        </tr>
         
          )
        }



      </table>


    </div>


  )

}



export default Datatfatch