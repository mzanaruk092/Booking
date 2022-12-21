import React from 'react'

const Gallary = () => {
  return (
    <div id='gallary' className='max-w-[1140px] m-auto w-full px-4 py-16'>
        <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img className='w-full h-full object-cover'  src='https://images.unsplash.com/photo-1600619754865-8fe927da0701?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHJlc29ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                 alt=''
                  />
            </div>
            <div>
                <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1596178067639-5c6e68aea6dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHJlc29ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                 alt=''
                  />
            </div>
            <div>
                <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHJlc29ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                 alt=''
                  />
            </div>
            <div>
                <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1610036615605-636de68a306e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHJlc29ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                 alt=''
                  />
            </div>
            <div>
                <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHJlc29ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                 alt=''
                  />
            </div>
           
        </div>
    </div>
  )
}

export default Gallary