import React, { useCallback } from 'react'

function MyChild({ count, setCount }) {

  const increaseCount = ()=>  {
    setCount(count + 1)
  }
  const decreaseCount = ()=>  {
    setCount(count - 1)
  }

  return (
    <div>
        <button onClick={decreaseCount}>-</button>
        <button onClick={increaseCount}>+</button>
    </div>
  )
}

export default MyChild