import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between p-6'>
        <h1 className='text-2xl font-bold'>Saravanakumar</h1>
    <div className='space-x-6'>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

    </div>
    </nav>
  )
}

export default Navbar