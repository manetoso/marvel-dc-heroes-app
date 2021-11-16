import React from 'react'

const UiHomeHero = ({ title, subtitle }) => {
    return (
        <>
            <div className='container mx-auto pt-5 pb-3 px-4'>
                <div className='md:flex justify-evenly items-center'>
                    <div className='md:flex-col'>
                        <h3 className='text-md font-medium text-gray-400 tracking-tighter'>{subtitle}</h3>
                        <h1 className='text-3xl font-black text-gray-800 tracking-tight'>{title}</h1>
                    </div>
                    <div className='flex justify-around mt-7 md:grid md:grid-cols-3 md:gap-5'>
                        <img
                            className='rounded-full shadow-xl'
                            src='/icons/hero-category.png'
                        />
                        <img
                            className='rounded-full shadow-xl'
                            src='/icons/villain-category.png'
                        />
                        <img
                            className='rounded-full shadow-xl'
                            src='/icons/antihero-category.png'
                        />
                        <img
                            className='rounded-full shadow-xl'
                            src='/icons/alien-category.png'
                        />
                        <img
                            className='rounded-full shadow-xl'
                            src='/icons/human-category.png'
                        />
                    </div>
                </div>
            </div>   
        </>
    )
}

export default UiHomeHero
