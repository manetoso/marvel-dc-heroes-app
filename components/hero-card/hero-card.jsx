import React from 'react'
import { useRouter } from 'next/router'

const HeroCard = ({ id, alter_ego, superhero }) => {
    const router = useRouter()
    const handleClick = () => {
        setTimeout(() => {
            router.push({
                pathname: `/hero-info/`,
                query: {
                    id: id,
                }
            })
        }, 400);
    }
    return (
        <>
            <div
                className='
                    group flex-none
                    ml-5 mt-2 mb-5
                    relative w-48 max-w-xs
                    filter drop-shadow-lg
                    bg-transparent overflow-hidden rounded-3xl cursor-pointer'
                key={id}
                onClick={handleClick}
            >
                <img
                    src={`/heroes/${id}.jpg`}
                    className='
                        rounded-3xl object-fill
                        group-hover:object-cover group-hover:scale-125
                        transition duration-500 ease-in-out'
                />
                <div className='absolute bottom-5 left-5 bg-gradient-to-r from-gray-800 rounded-xl'>
                    <h2 className='m-2 text-md font-medium text-gray-300 tracking-wider'>{alter_ego}</h2>
                    <h1 className='m-2 text-2xl font-black text-white tracking-tighter'>{superhero}</h1>
                </div>
            </div>   
        </>
    )
}

export default HeroCard
