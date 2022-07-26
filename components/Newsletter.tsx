import React from 'react'

const Newsletter = () => {
  return (
    <div className=' flex justify-center items-center   '>
<div className="bg-darkBlue h-[391px]  rounded-xl flex flex-col justify-center items-center font-manrope text-white   ">
  <h1 className='text-[48px] text-center w-[60%]'>An enterprise template to ramp up your company website
</h1>
<div className="flex mt-12 ">
  <form className='space-x-6' action="">
  <input className='rounded-[240px] text-gray ou text-xl py-3 pl-8 pr-[158px]' placeholder='Your Email Address' type="email" name="" id="" />
  <button className="w-max rounded-[56px] bg-green px-[56px] py-4 font-opensans text-xl font-bold text-darkBlue">
            Start Now
          </button>
  </form>
</div>
</div>
    </div>
  )
}

export default Newsletter