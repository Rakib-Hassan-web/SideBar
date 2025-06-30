import React, { useState } from 'react'

const Value = () => {

const[value , setvalue ] =useState(0)


const handleplus =()=>{
    setvalue(value+1)
}


  return (
    <div className=' ml-[400px] mt-[-555px] flex justify-center items-center gap-5'>


   <h1 className='text-[40px]'>{value}</h1>




<button  onClick={handleplus}  >Plus</button>
  



    </div>
  )
}

export default Value