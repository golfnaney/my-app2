import React, { useState } from 'react'
import MyChild from './MyChild'

function MyContainer() {
  const [name, setName] = useState('foo')

  return (
    <div><p>ชื่อหน้าหลัก{name}</p>
    <MyChild name={name} onNameChange={setName} />
    </div>
  )
}

export default MyContainer