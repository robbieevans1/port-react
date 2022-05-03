import React from 'react'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
          <p className='py-6'>Here are some of my recently completed projects:</p>
        </div>
        
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div>
            <div>
              <div>
                <span></span>
                <div>
                  <a href='/'>
                    <button></button>
                  </a>
                  <a href='/'>
                    <button></button>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Work