import React from 'react'

import { heroes } from '../../data/heroes'
import { getHeroesByPublisher } from '../../utils/getHeroesbyPublisher'

import HeroCard from '../hero-card/hero-card'

const HeroesCarousel = ({ publisher, allHeroes }) => {
    if ( allHeroes ) {
        return (
            <div className='scrollView'>
                <h3 className='text-lg ml-5 mt-5 text-gray-500 font-bold tracking-tighter'>
                    All Heroes
                </h3>
                <div className='flex overflow-x-scroll'>
                    {
                        heroes.map( (index) => (
                            <HeroCard
                                key={index.id}
                                id={index.id}
                                alter_ego={index.alter_ego}
                                superhero={index.superhero}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
    const publisherHeroes = getHeroesByPublisher(publisher)
    return (
        <div className='scrollView'>
            <h3 className={`text-lg ml-5 mt-5 text-${publisher === 'Marvel Comics' ? 'red' : 'blue'}-500 font-bold tracking-tighter`}>
                {publisher === 'Marvel Comics' ? 'Marvel Heroes' : 'DC Heroes'}
            </h3>
            <div className='flex overflow-x-scroll'>
                {
                    publisherHeroes.map( (index) => (
                        <HeroCard
                            key={index.id}
                            id={index.id}
                            alter_ego={index.alter_ego}
                            superhero={index.superhero}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default HeroesCarousel
