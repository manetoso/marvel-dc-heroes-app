import React, { useState } from 'react'

const UiNavbar = () => {
    return (
        <>
            <nav className="flex items-center justify-evenly flex-wrap p-4">
                <div className='flex justify-between w-full md:w-auto'>
                    <div className='w-4 h-4'></div>    
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <img src='/icons/comics-logo.png' className='h-20'/>
                    </div>
                    <div className='w-4 h-4'></div>
                </div>
            </nav>   
        </>
    )
}

export default UiNavbar
