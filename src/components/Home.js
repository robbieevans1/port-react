import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-B flex flex-col justify-center h-full'>
        <p className='text-yellow-600'>Hello! my name is</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>Robbie Evans</h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>I am a junior web developer.</h2>
        <h2 className='py-4 max-w-[700px] text-[#8892b0]'>I am currently enrolled in University of Richmond's Coding Bootcamp.</h2>
      <div>
        <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600'>View Work
        <span className='hover:rotate-90 duration-300'>
        <HiArrowNarrowRight className='ml-3' />
        </span>
          
        </button>
      </div>
      </div>
    </div>
  )
}

export default Home