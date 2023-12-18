import React from 'react'
import images from '../images/video-image.png'

export const Intro = () => {
  return (
    <div className='tablet:flex tablet:flex-row mobileS:flex mobileS:flex-col mobileS:items-center mobileS:justify-center overflow-x-hidden pt-[5rem] gap-16 pb-[5rem]'>
            <img className='h-[30rem]' src={images}/>
<div className='mobileS:pl-[1rem] tablet-[0]'>
            <h3 className=' font-light tracking-[0.5rem]'>SINCE 2000</h3>
        <h1 className='text-black text-5xl pt-[1rem] tracking-tight leading-15 max-w-[45rem] pb-[2rem] font-display'>I make photos and super flims let's make your love look like indie movie</h1>
        <div className='h-[4px] bg-red-500 w-[15%] rounded-2xl  '>

        </div>
        </div>
    </div>
  )
}
