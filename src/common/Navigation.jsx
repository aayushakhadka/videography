import React from 'react'

export const Navigation = () => {
  return (
    <div className='tablet:hidden mobileS:flex h-[4rem] gap-10 bg-red-700 bottom-[0%] fixed z-50 navHide:hidden '>
        <div className='bg-black w-screen opacity-70 h-[4rem] flex items-center justify-center gap-14  mobileS:gap-7'>
          <a href='#home'>     
             <h1 className='text-white tracking-[1px] text-xl  '>Home</h1>
          </a>
<a href='#projects'>
      <h1 className='text-white text-xl '>Projects</h1>
      </a>
      <a href='#peoplesays'>
      <h1 className='text-white text-xl '>People Says</h1>
      </a>
      <a href='#faqs'>
          <h1 className="text-white text-xl hover:opacity-80">Faqs</h1>
        </a>
      
      </div>
    </div>
  )
}
