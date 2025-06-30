import React from 'react'

const Navbar = () => {
  return (
    <>
    
    <div className='py-20 bg-amber-400 '>

        <ul>
            <li><link to={'/'}>Home</link></li>
            <li><link to={'/About'}>About</link></li>
            <li><link to={'/Contact'}>Contact</link></li>
        </ul>
    </div>
    
    </>
  )
}

export default Navbar