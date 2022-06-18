import React, { useState } from 'react'
import MyChild from './MyChild'

function MyContainer() {
  const [count, setCount] = useState(0)

  return (
    <div><p>Count : {count}</p>
    <MyChild count={count} setCount={setCount} />
    </div>
  )
}

export default MyContainer