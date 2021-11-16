import React from 'react'

const HeroBigCard = ({ id, alter_ego, superhero, publisher }) => {
    return (
        <>
            <div className='relative rounded-b-3xl overflow-hidden md:w-96 md:rounded-3xl'>
                <img
                    className='w-screen z-0 rounded-b-3xl md:rounded-3xl md:w-96 hover:scale-125 transition ease-in-out duration-500'
                    src={`/heroes/${id}.jpg`}
                />
                <div 
                    className='
                        absolute top-5 left-5'
                >
                    {
                        publisher === 'Marvel Comics'
                            ? <img className='w-20' src='/icons/marvel-logo.png'/>
                            : <img className='h-20' src='/icons/dc-logo.png'/>
                    }
                </div>
                <div 
                    className='
                        absolute bottom-10 left-5
                        bg-gradient-to-r from-gray-800 rounded-xl'
                >
                    <h2 className='m-2 text-xl font-medium text-gray-300 tracking-wider'>{alter_ego}</h2>
                    <h1 className='m-2 mb-6 text-6xl font-black text-white tracking-tighter'>{superhero}</h1>
                </div>
            </div>
        </>
    )
}

export default HeroBigCard
