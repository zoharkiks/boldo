import React from 'react'
import { images } from '../constants'

const Footer = () => {
  return (
    <div className='px-[100px] py-[117px] flex mt-[84px] font-opensans'>

      <div className="flex flex-col text-gray">
        <div className="flex">
        <img src={images.logodark.src} alt="" />
        </div>
        <p className='w-1/2 mt-10 mb-16'>
        Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.
        </p>
        <span>All rights reserved.</span>
      </div>

<div className="flex text-xl space-x-[96px] mr-[179px] text-gray">
<div className="flex flex-col space-y-8  ">
        <h2 className='font-bold text-black '>Landings</h2>
<a  href=''>Home</a>
<a href=''>Products</a>
<a href=''>Services</a>
      </div>

      <div className="flex flex-col space-y-8">
        <h2 className='font-bold text-black'>Company</h2>
<a href=''>Home</a>
<div className="flex space-x-3">
<a href=''>Careers</a> 
<span className='font-bold text-[13px] text-darkBlue bg-green rounded-[120px] px-[14px] py-[1px] -3'>Hiring!</span>
</div>
<a href=''>Services</a>
      </div>

      <div className="flex flex-col space-y-8">
        <h2 className='font-bold text-black'>Resources</h2>
<a href=''>Blog</a>
<a href=''>Products</a>
<a href=''>Services</a>
      </div>
</div>
      
    </div>
  )
}

export default Footer