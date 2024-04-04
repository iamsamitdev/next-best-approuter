import Link from 'next/link'
import React from 'react'

type Props = {}

export default function NotFound({}: Props) {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <div className="flex flex-col space-y-4 w-96 text-start">
        <Link href="/">&larr; Home</Link>
        <h1 className='text-4xl'>404 NotFound</h1>
      </div>
    </div>
  )
}