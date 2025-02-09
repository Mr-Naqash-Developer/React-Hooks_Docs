import React, { useState } from 'react'

const UseState = () => {
  const [name, setName] = useState('Tylor')
  const [age, setAge] = useState(32)

  return (
    <div>
      <input className='max-w-[250px] pl-2 border-2 rounded-lg border-black' value={name} onChange={(e) => setName(e.target.value)} type="text" />
      <button onClick={() => setAge(age + 1)}>Increment Age</button>
      <p>Hello, {name}. You are {age}.</p>
    </div>
  )
}

export default UseState
