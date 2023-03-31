import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';



type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between bg-white max-w-7xl mx-auto z-100 xl:items-center m-2 rounded'>
        <div className='flex flex-row items-center ' >
            {/* social icons using react social icons*/}
            <SocialIcon  url="https://linkedin.com/in/melrickpereira" bgColor="transparent" fgColor="white" />
            <SocialIcon url="https://github.com/MelrickPereira" bgColor="transparent" fgColor="white"/>
            <SocialIcon url="https://instagram.com/melrick_imp" bgColor="transparent" fgColor="white"/>

        </div>
        <div className='flex flex-row items-center cursor-pointer'>
        <SocialIcon className='cursor-pointer' url="email.com" bgColor="transparent" fgColor="white" />
        <p className='uppercase hidden md:inline-flex text-gray-400 m-2'>Get in touch</p>
        </div>
        
    </header>
  )
}

export default Header