import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#5cdb94]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-B flex flex-col justify-center h-full'>
        <p className='text-blue-900'>Hello! my name is</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-blue-900'>Robbie Evans</h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-blue-900'>I am a junior web developer.</h2>
        <h2 className='py-4 max-w-[700px] text-blue-900'>I am currently enrolled in University of Richmond's Coding Bootcamp.</h2>
      <div>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-900 hover:border-blue-900'>View Work
        <span className='group-hover:rotate-90 duration-300'>
        <HiArrowNarrowRight className='ml-3' />
        </span>
          
        </button>
      </div>
      </div>
    </div>
  )
}

export default Home