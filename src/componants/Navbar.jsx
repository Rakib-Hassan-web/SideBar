import React from 'react'

import { Link } from 'react-router'

const Navbar = () => {
  return (

    
    <div className=' py-5 w-[400px] h-screen  bg-pink-400 text-3xl flex justify-center items-center '>

        <ul className='flex justify-center flex-col justify-center items-center gap-6'>
            <li><a href='/'>Home</a></li>
            <li><a href='/About'>About</a></li>
            <li><a href='/Contact'>Contact</a></li>
            <li><a href='/Value'>Value</a></li>
        </ul>
        

    </div>
    


   
  )
}

export default Navbar