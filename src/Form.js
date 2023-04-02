import React, { useState } from 'react'

export default function Form() {
  const [value, setValue] = useState('')
  function handleSubmit() {
    
  }
  return <form onSubmit={handleSubmit()}>
    <input type="text" name="name" value={value} onChange={(e)=>setValue(e.target.value)}/>
    <button type='submit'>create</button>
  </form>
};
