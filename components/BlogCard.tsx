import React from 'react'
import { images } from '../constants'

const BlogCard = () => {
  return (
    <div className='flex flex-col items-cente  font-opensans'>
<div className="flex h-[209px]  ">
    <img className='w-max' src={images.info1.src} alt="" />
</div>
<div className="flex justify-center items-center space-x-3 mt-6">
    <span className='font-bold text-darkBlue'>Category</span>
    <span className=' text-gray'>November 22, 2021</span>
</div>
<p className=' text-xl mt-3 mb-5'>Pitch termsheet backing validation focus release.</p>
<div className="flex justify-start items-center space-x-3">
<img className='h-8 w-8' src={images.people1.src} alt="" />
    <span>Monica Geller</span>
</div>

    </div>
  )
}

export default BlogCard