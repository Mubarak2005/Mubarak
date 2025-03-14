import React from 'react'
import Hero from './Hero'
import { Element } from 'react-scroll'


const Home = () => {
  return (
    <Element name="home">
        <section className="h-screen flex justify-center items-center">
          <Hero />
        </section>
      </Element>
  )
}

export default Home
