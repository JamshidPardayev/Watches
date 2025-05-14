import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1200px] min-h-[377px] mx-auto  bg-[#F6F6F6] mt-[100px] mb-[30px] flex  justify-between items-center gap-10 px-[100px] rounded-[22px] py-[20px] max-md:flex-col max-md:text-center max-lg:px-[60px] max-md:px-[20px]'>
      <div>
        <h1 className='text-[36px] text-[#1E1D1D] font-bold '>Subscribe To Newsletter</h1>
        <p className='text-[16px] text-[#8B8E99] font-medium my-[12px]'>Get free guide about smart watches daily. </p>
        <form action="" className='flex items-center max-w-[443px] bg-white h-[60px] rounded-[15px]'>
          <input type="email" required placeholder='Enter Email Address' className='bg-white w-full h-full px-3 outline-none rounded-[15px] border-none'/>
          <button className='w-[131px] h-[45px] text-white bg-[#3858D6] hover:bg-blue-800 duration-300 rounded-[9px] cursor-pointer mr-[9px]'>Subscribe</button>
         </form>
      </div>
      <div>
        <img src="./image/contactImg.png" alt="contactimage" className='hover:scale-105 duration-300 cursor-pointer '/>
      </div>
    </div>
  )
}

export default Contact
