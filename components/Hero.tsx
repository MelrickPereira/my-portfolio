import React from 'react'
import Image from 'next/image'

type Props = {}

function Hero({}: Props) {
  return (
    <>
    <div className='flex items-start justify-between bg-black max-w-7xl mx-auto z-100 xl:items-center m-2 rounded p-2'>
      <div className='block'>

        <Image 
          src="/profile pic.png"
          alt="Picture of the author"
          width={200}
          height={200}
        />
    
        <h1 className='text-white text-xl mx-7 mt-1'> Melrick Pereira</h1>
        <p className='text-gray-400 mx-8'>Web Developer</p>
        
      </div>
        
        <div className='text-gray-400 m-5 text-xl'>Resume</div>



    </div>
   
    </>
  )
}

export default Hero