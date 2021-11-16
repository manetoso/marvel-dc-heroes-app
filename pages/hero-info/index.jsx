import React from 'react'
import { useRouter } from 'next/router'

import { getHeroesById } from '../../utils/getHeroById'
import HeroBigCard from '../../components/hero-big-card/hero-big-card'

const HeroInfo = () => {
    const router = useRouter()
    const { id } = router.query

    console.log(id)

    const heroInfo = getHeroesById(id)

    if (heroInfo[0] === undefined) return <div>
        <h1>Loading</h1>
    </div>

    const handleBack = () => {
        router.back()
    }

    const {
        alter_ego,
        characters,
        superhero,
        publisher,
        first_appearance
    } = heroInfo[0]
    console.log(publisher);
    return (
        <>
            <div className='bg-black h-screen'>
                <div className='md:flex md:justify-evenly md:items-center md:h-screen'>
                    <HeroBigCard
                        id={id}
                        alter_ego={alter_ego}
                        superhero={superhero}
                        publisher={publisher}
                    />
                    <div className='flex flex-col mt-5'>
                        <div className='mb-4'>
                            <h3 className='mx-4 text-2xl font-bold text-white'>First appearance in the comic: </h3>
                            <p className='mx-4 text-xl text-gray-300'>{first_appearance}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroInfo
