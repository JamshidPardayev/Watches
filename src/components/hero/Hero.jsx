import React from 'react'
const Hero = () => {
  return (
    <div id='home' className='w-[100%] min-h-[887px] bg-gradient-to-b from-[#383638] to-[#0B0B0B]'>
      <div className='flex min-h-[887px] justify-between items-center max-w-[1200px] mx-auto px-[15px] max-sm:flex-col max-sm:pt-[100px] max-sm:pb-[50px] max-sm:text-center'>
        <div>
         <h1 className='text-white text-[64px] max-w-[420px] font-bold leading-[125%] tracking-[0%] '>Discover Most Suitable Watches</h1>
         <p className='text-[16px] text-[#8B8E99] max-w-[410px] tracking-[0%] font-medium mt-[20px]'>Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!</p>
         <form action="" className='flex items-center max-w-[443px] bg-white mt-[40px]  h-[60px] rounded-[15px]'>
          <input type="text" placeholder='Find the best brands' className='bg-white w-full h-full px-3 outline-none rounded-[15px] border-none'/>
          <button className='w-[112px] h-[45px] text-white bg-[#3858D6] hover:bg-blue-800 duration-300 rounded-[9px] cursor-pointer mr-[9px]'>Search</button>
         </form>
        </div>
        <div className='max-w-[461px] max-h-[563px]'>
          <img src="./image/heroImg.png" alt="heroImg"  className='w-full h-full'/>
        </div>
      </div>
    </div>
  )
}

export default Hero
