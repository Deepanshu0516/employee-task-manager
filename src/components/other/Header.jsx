import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
    
    const logOutUser = () => {
        localStorage.setItem('loggedInUser','')
        // window.location.reload();
        props.changeUser('')
    }

    return (
        <div className='flex items-center justify-between'>
            <h1 className='text-white text-2xl font-medium flex flex-col items-start'>
                Hello <br />
                <span className='text-3xl font-semibold'>{props.data?.firstName || 'User'} 👋</span>
            </h1>
            <button
            onClick={logOutUser} 
            className="bg-red-600 text-white px-4 py-2 rounded font-semibold hover:scale-105 hover:bg-red-700">
                Log Out
            </button>
        </div>
    )
}

export default Header
