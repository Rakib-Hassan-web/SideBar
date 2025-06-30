import React, { useState } from 'react'

const Value = () => {

const[value , setvalue ] =useState(1)


const handleplus =()=>{
    setvalue(value+1)
}

const handleminus =()=>{
    setvalue(value-1)
    if(value<2){
        alert('value 0 er upore')
        setvalue(value==1)
    }
    else{
        
    }
}

  return (
    <div className=' ml-[400px] mt-[-555px] flex justify-center items-center gap-9'>


<button  onClick={handleminus} className=' border-[2px] w-[125px] text-[33px] p-[3px] border-red-500 rounded-[8px] bg-red-400' >MINUS</button>


   <h1 className='text-[50px]'>{value}</h1>




<button  onClick={handleplus} className=' border-[2px] w-[95px] text-[33px] p-[3px] border-red-500 rounded-[8px] bg-red-400' >PLUS</button>
  



    </div>
  )
}

export default Value