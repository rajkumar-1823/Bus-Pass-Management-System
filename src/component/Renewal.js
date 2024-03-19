import React, { useEffect, useState } from 'react'
import './Renewal.css'
import axios from 'axios'

export default function Renewal() {

  const[id,setID] = useState('')
  const[userlist,setUserList] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3001/form')
    .then(res=>setUserList(res.data))
  })

  const handleSubmit = () => {
     
    const checId = userlist.some(item=>item.id===id)

    if(checId){
      alert("Renewal Successfully")
    }
    else{
      alert("Invalid id")
    }


  }

  return (
    <div className='all-renew'>
      <div className="header2">
          <h2>Renewal Form</h2>
      </div>
      <div className="renewal">
          <form onSubmit={handleSubmit}>
              <input type="text" placeholder="BusPass id"  value={id} onChange={(e)=>{setID(e.target.value)}}/>
              <button type="submit">Submit</button>
          </form>
      </div>
    </div>
  );
}
