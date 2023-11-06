import React, { useState } from 'react'
import {RiArrowDropDownLine} from "react-icons/Ri"
import {Link} from "react-router-dom"




const Header = () => {

  const [show,setShow] =useState<boolean>(false)

  const toggle =()=>{
    setShow(!show)
  }

  return (
    <div className=' w-full h-[70px] bg-[dodgerblue] flex justify-between  items-center  fixed z-[10]'>
        <div className='flex'>
            <div className='text-[35px] font-bold uppercase text-[black]'>corshaft</div>
        </div>
  
        <div className='flex gap-[20px] font-semibold cursor-pointer'>
            <div className='flex justify-center items-center text-white'>For Sale <RiArrowDropDownLine/></div>
            <div className='flex justify-center items-center text-white'> <RiArrowDropDownLine/></div>
            <div className='flex jsuutify-center items-center text-white'>For Rent <RiArrowDropDownLine/></div>
            <div className='flex justify-center items-center text-white'>Agents <RiArrowDropDownLine/></div>
            <div className='flex justify-center items-center text-white'>Short Let<RiArrowDropDownLine /></div>
            <div className='flex justify-center items-center text-white'>Market Trends<RiArrowDropDownLine /></div>
        </div>
        <div className='flex gap-[10px] cursor-pointer'>
            <button className=' px-4 py-2 h-[40px] w-[80%] rounded-[20px] border-white text-white border hover:bg-[blue] font-semibold translate-[scale(0.009)] transition-all 350ms'>Login</button>
            
            <button className='px-4 py-2 h-[40px] w-[80%] rounded-[20px]  bg-[black] text-[azure] border  mr-8 hover:bg-[blue] font-semibold translate-[scale(0.009)] transition-all 350ms'>Signup</button>
        </div>
        
     
    </div>
  )
}

export default Header