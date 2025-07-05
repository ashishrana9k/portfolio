import React from 'react'

export default function Footer() {
  return (
    <div className="container">
      <div className="text-center space-y-5">
            <h3 className='text-xl'>Portfolio</h3>
            <ul className='flex mx-auto justify-center gap-8'>
                <li><a href="/">About</a></li>
                <li><a href="/">Project</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <div>
                <p className="text-gray-400">© 2025 name here. All rights reserved.</p>
            </div>
      </div>
    </div>
  )
}
