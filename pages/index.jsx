import React from 'react'
import Head from 'next/head'

import HeroesCarousel from '../components/heroes-carousel/heroes-carousel'
import UiHomeHero from '../components/ui-home-hero/ui-home-hero'
import UiNavbar from '../components/ui-navbar/ui-navbar'

const index = () => {
  return (
    <>
      <Head>
        <title>Marvel & DC Heroes</title>
        <link rel="icon" href="/icons/marverl-dc-logo.png" />
      </Head>
      
      <main className='flex flex-col'>
        <div className='content-start'>
          <UiNavbar />
          <UiHomeHero
            title='Choose a Character'
            subtitle='Welcome to Marvel and DC Heroes'
          />
          <HeroesCarousel publisher='Marvel Comics'/>
          <HeroesCarousel publisher='DC Comics'/>
          <HeroesCarousel allHeroes={true}/>          
        </div>
      </main>
    </>
  )
}

export default index
