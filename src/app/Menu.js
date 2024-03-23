import Link from 'next/link'
import React from 'react'

export default function Menu() {
  return (
    <div>
         <Link href='/home'>Home</Link> &nbsp;&nbsp;
         <Link href='/about'>About</Link>&nbsp;&nbsp;
         <Link href='/products'>Product</Link>
    </div>
  )
}
