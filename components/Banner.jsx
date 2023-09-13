import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
// import ImageLink from '../../../public/images'

const Banner = () => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className="beats-solo"></p>
        <h3>Traditional ART</h3>
        <h1>PRATHART</h1>
        <img src="/images/logo.png" alt="about" className='hero-banner-image' layout="fill"/>

        <div>
          <Link href="/product/ID">
            <button type='button'>About Us</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner
