import React from 'react'
import HeroImg from "../assets/1.png"

const Hero = () => {
  return (
    <div>
        <div className='container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px]'>
            {/* text section  */}
            <div className='flex flex-col justify-center gap-5 text-center md:text-left pt-24 md:p-0 pb-10'>
                <h1 className='text-5xl font-semibold'>Delicious Food Is Waiting For You!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dignissimos reiciendis eos. Tempore non autem vitae odio commodi dolor blanditiis.</p>
                <div className='flex gap-4 items-center md:justify-start justify-center'>
                    <button className='primary-btn'>Food Menu</button>
                    <button className='secondary-btn'>Book Table</button>
                </div>
            </div>
            {/* image section */}
            <div className='flex flex-col justify-center'>
                <img src={HeroImg} alt="hero image"/>
            </div>
        </div>
    </div>
  )
}

export default Hero