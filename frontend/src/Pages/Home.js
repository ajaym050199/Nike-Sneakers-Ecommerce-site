import React from 'react'
import Showcase from '../components/Showcase'
import Products from '../components/Products'
import Story from '../components/Story'
import Featured from '../components/Featured'

function Home() {
  return (
    <div>
        <Showcase />
        <Featured />
        <Story />
        <Products />
    </div>
  )
}

export default Home