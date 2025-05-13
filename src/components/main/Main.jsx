import React from 'react'
import Hero from '../hero/Hero'
import Products from '../products/Products'
import About from '../about/About'
import Contact from '../contact/Contact'
import Brands from '../brands/Brands'

const Main = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <Products />
      <About />
      <Contact />
    </div>
  )
}

export default Main
