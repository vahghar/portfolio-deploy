import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { BsArrowRight } from 'react-icons/bs'


const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill='white' />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill='purple' />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill='blue' />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] absolute bg-grid-black/[0.2] flex items-center justify-center top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className='max-w-[89vw]md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>

          <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' words='DelTech Student' />
          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl' >Raghav Ghulyani</p>

          <a href='#projects'>
            <MagicButton
              title="Show My Work"
              icon={<BsArrowRight className='ml-2' />} // Replace with your actual icon component
              position="left" // or "right", depending on your needs
            />
          </a>
        </div>
      </div>

    </div>
  )
}

export default Hero
