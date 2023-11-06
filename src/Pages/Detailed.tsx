import React from 'react'
import {AiOutlineInteraction} from "react-icons/ai"
import pics from "../assets/lek 6.jpg"


const Detailed = () => {
  return (
   <div>
         <div className='w-full h-[350px] border bg-slate-100 flex justify-center items-center flex-col mt-30'> <div className=' flex justify-start items-start  ml-[30px]  text-[35px] font-bold '>Quick App Review</div> 
         <div className='flex-row  w-full h-[150%]  flex  justify-center items-center mt-[2%] flex-row gap-2'>

            <div  className='h-[250px] w-[80%]  rounded bg-[silver] border shadow-sm hover:border-[dodgerblue] shadow-sm  transition-200ms cursor-pointer '>
              <div className='flex flex-col'>
              <div className='flex justify-center items-center mt-5'><AiOutlineInteraction className='text-[45px] '/></div>
              <div className='flex justify-center items-center font-semibold mt-2 text-[15px] '> Quick and Easy interaction </div>
              <div className='text-[10px] font-semibold flex justify-center items-center mt-3 line-[35px] text-center leading-[20px] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Aliquam consectetur fugit omnis eligendi ab animi perspiciatis hic!  Ducimus <br /> ab facere excepturi architecto quaerat necessitatibus eos ipsum voluptatem! Perspiciatis, est eos.</div>
              </div>
              
            </div>
            <div className='h-[250px] w-[80%] rounded bg-[silver] border shadow-sm hover:border-[dodgerblue] shadow-sm transition-200ms cursor-pointer '>
            <div className='flex flex-col'>
              <div className='flex justify-center items-center mt-5'><AiOutlineInteraction className='text-[45px] f'/></div>
              <div className='flex justify-center items-center font-semibold mt-2 text-[15px]'> Flexibility And Speed  </div>
              <div className='text-[10px] font-semibold flex justify-center items-center mt-3 text-center leading-[20px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Aliquam consectetur fugit omnis eligendi ab animi perspiciatis hic!  Ducimus <br /> ab facere excepturi architecto quaerat necessitatibus eos ipsum voluptatem! Perspiciatis, est eos.</div>
              </div>
            </div>
            <div className='h-[250px] w-[80%] rounded bg-[silver] border shadow-sm  hover:border-[dodgerblue] shadow-sm transition-200ms cursor-pointer'>
              <div className='flex flex-col'>
              <div className='flex justify-center items-center mt-5'><AiOutlineInteraction className='text-[45px] f'/></div>
              <div className='flex justify-center items-center font-semibold mt-2 text-[15px]'> Fast cash Flow and Transaction </div>
              <div className='text-[10px] font-semibold flex justify-center items-center mt-3 text-center leading-[20px] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Aliquam consectetur fugit omnis eligendi ab animi perspiciatis hic!  Ducimus <br /> ab facere excepturi architecto quaerat necessitatibus eos ipsum voluptatem! Perspiciatis, est eos.</div>
              </div>
            </div>
            <div className='h-[250px] w-[80%] rounded bg-[silver]  border shadow-sm  hover:border-[dodgerblue] shadow-sm transition-200ms cursor-pointer'>
              <div className='flex flex-col'>
              <div className='flex justify-center items-center mt-5'><AiOutlineInteraction className='text-[45px] f'/></div>
              <div className='flex justify-center items-center font-semibold mt-2 text-[15px]'> Ease your stress</div>
              <div className='text-[10px] font-semibold flex justify-center items-center mt-3 text-center leading-[20px] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Aliquam consectetur fugit omnis eligendi ab animi perspiciatis hic!  Ducimus <br /> ab facere excepturi architecto quaerat necessitatibus eos ipsum voluptatem! Perspiciatis, est eos.</div>
              </div>
            </div>
            <div className='h-[250px] w-[80%] rounded bg-[silver]  border shadow-sm  hover:border-[dodgerblue] shadow-sm transition-200ms cursor-pointer'>
              <div className='flex flex-col'>
              <div className='flex justify-center items-center mt-5'><AiOutlineInteraction className='text-[45px] f'/></div>
              <div className='flex justify-center items-center font-semibold mt-2 text-[15px]'> Ease your stress</div>
              <div className='text-[10px] font-semibold flex justify-center items-center mt-3 text-center leading-[20px] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Aliquam consectetur fugit omnis eligendi ab animi perspiciatis hic!  Ducimus <br /> ab facere excepturi architecto quaerat necessitatibus eos ipsum voluptatem! Perspiciatis, est eos.</div>
              </div>
            </div>
         </div>

         
         </div>

            <div className='w-full h-[350px] mt-1'>
            <img src={pics}  className='w-full h-[350px] object-cover object-contain  mt-1  '/>
           </div> 
         
           
            <div/>
            
         </div>
  )
}

export default Detailed