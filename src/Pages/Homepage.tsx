import React from 'react'
import pics from "../assets/lek 5.png"


const Homescreen = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
       <img src={pics} className=' w-full h-[600px]  flex justify-center items-center ' />
       
       
        
<div className='w-[60%] h-[30%]  bg-[#00000089] absolute flex justify-center items-center mt-[40px]'>
      <div className=' flex justify-center items-center  mr-[80vh] absolute  mt-[15%]' >
       <input type="text" className='w-[150%] h-[40px]    outline-none flex justify-center items-center '/>
        </div>
       
        </div>
        <div className='w-[50px] h-[30px] flex  justify-center items-center gap-5 absolute '>
       <div className=' w-[50px]  text-[40px] font-semibold text-white flex justify-center items-center   '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eos praesentium nulla voluptas ex. Architecto et modi at doloribus expedita, repudiandae minima assumenda cumque tenetur totam, blanditiis, laborum error eius.</div>
       </div>

     
    </div>
  )
}

export default Homescreen