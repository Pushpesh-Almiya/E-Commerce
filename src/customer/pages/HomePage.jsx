import React from 'react'
import MainCarousel from '../Components/homeCarousel/MainCarousel'
import CardCarousel from '../Components/homeCarousel/CardCarousel'
import { mens_kurta } from "../../Data/mens_kurta";

function HomePage() {
  return (
    <div>
      <MainCarousel/>
      <div className='space-y-10 py-20 px-5 lg:px-10'>
        <CardCarousel data={mens_kurta} section ="Men's Kurta"/>
        <CardCarousel data={mens_kurta} section ="Men's Shoes"/>
      </div>
    </div>
  )
}

export default HomePage
