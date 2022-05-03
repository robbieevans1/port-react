import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className=' w-full h-screen bg-[#5cdb94] text-blue-900'>
      {/* Container */}
      <div>

      </div>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <div>
      <p className='text-4xl font-bold inline border-b-4 border-blue-900'>Tech Skills</p>
      <p className='py-4'>Here's the tech that I use most frequently</p>
    </div>

    <div className='w-full grid grid-cols-2  sm:grid-cols-4 gap-4 text-center py-8'>
      <div className='shadow-md shadow-[#040c16] bg-[#05386b] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={HTML} alt='html icon'></img>
        <p className='my-4 text-white'>HTML</p>
      </div>
      <div className='shadow-md shadow-[#040c16] bg-[#05386b] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={CSS} alt='html icon'></img>
        <p className='my-4 text-white'>CSS</p>
      </div>
      <div className='shadow-md shadow-[#040c16] bg-[#05386b] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={JavaScript} alt='html icon'></img>
        <p className='my-4 text-white'>JavaScript</p>
      </div>
      <div className='shadow-md shadow-[#040c16] bg-[#05386b] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={ReactImg} alt='html icon'></img>
        <p className='my-4 text-white'>React</p>
      </div>
      <div className='shadow-md shadow-[#040c16] bg-[#05386b] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={GitHub} alt='html icon'></img>
        <p className='my-4 text-white'>GitHub</p>
      </div>
      <div className='shadow-md shadow-[#040c16] bg-[#05386b] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={Node} alt='html icon'></img>
        <p className='my-4 text-white'>Node.js</p>
      </div>
      <div className='shadow-md shadow-[#040c16] bg-[#05386b] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={Mongo} alt='html icon'></img>
        <p className='my-4 text-white'>MongoDB</p>
      </div>
      <div className='shadow-md shadow-[#040c16] bg-[#05386b] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={AWS} alt='html icon'></img>
        <p className='my-4 text-white'>AWS</p>
      </div>
    </div>
      </div>  </div>
    
  )
}

export default Skills