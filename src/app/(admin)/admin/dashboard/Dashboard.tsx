'use client'

import React, { useState } from 'react'

type Props = {}

export default function DashboardPage({}: Props) {

  // Counter
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Dashboard Page</h1>
      <button onClick={() => setCount(count + 1)}> + Increment</button>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count - 1)}> - Decrement</button>

    </div>
  )
}