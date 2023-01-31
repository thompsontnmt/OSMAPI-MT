import React from 'react'
import { ReactComponent as Logo } from '../assets/WordmarkBlack.svg';
const Nav = () => {
  return (
<>
    <div className='col__1'>
        <div className='full'>
            <div className='wordmark'>
                <Logo />
            </div>
        </div>
    </div>
    <div className='ColSpan__8'>
        <div className='linknav'>
            <p>Home</p>
        </div>
    </div>
</>
  )
}

export default Nav;