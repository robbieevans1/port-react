import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#5cdb94] flex justify-center items-center p-4'>
      <form method='post' action='https://getform.io/f/50211ab8-8c61-4baf-ad38-480ae3bea580' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-900 text-blue-900'>Contact</p>
          <p className='text-blue-900 py-4'> Please you the form below to contact me or shoot me an email at robert.m.evans3@gmail.com</p>
        </div> 
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder="Name" name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder="Email" name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Type your message here!'></textarea>
        <button className='text-white border-2 hover:bg-blue-900 hover:border-blue-900 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
      </form>
    </div>
  )
}

export default Contact