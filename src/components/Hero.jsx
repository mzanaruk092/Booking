import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
        <img src='https://images.unsplash.com/photo-1570651851409-93d5add773d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHNlYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='/'
        className='w-full h-full object-cover' />
        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-4xl'>Find Your Spacial Trip</h1>
                <h2 className='text-4xl py-4 italic'>With Weekly</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio officiis nam tempore id blanditiis doloremque ab impedit veniam in expedita incidunt, officia architecto? Consequuntur doloribus quaerat ipsam numquam at eligendi.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Hero