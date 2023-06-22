import React from 'react'

const Header = () => {
  return (
    <div className='relative'>
        <header className='fixed top-0 left-0 right-0 '>
        <div className='flex items-center gap-8  bg-black text-white cursor-pointer justify-center text-2xl '>
            <h1>Home</h1>
            <h1>Store</h1>
            <h1>About</h1>
        </div>
    </header>
    </div>
  )
}

export default Header