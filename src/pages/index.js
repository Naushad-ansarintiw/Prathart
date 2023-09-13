import React from 'react'
import {Banner, Product, Contact} from '../../components/index'

const products = [
  {
    "_id": 2,
    "name": "product2",
    "imageURL": "/images/2.jpeg",
    "price": 69,
    "slug": "product2"
  },
  {
    "_id": 3,
    "name": "product3",
    "imageURL": "/images/3.jpeg",
    "price": 99,
    "slug": "product3"
  },
  {
    "_id": 4,
    "name": "product4",
    "imageURL": "/images/4.jpeg",
    "price": 87,
    "slug": "product4"
  },
  {
    "_id": 5,
    "name": "product5",
    "imageURL": "/images/5.jpeg",
    "price": 69,
    "slug": "product5"
  },
  {
    "_id": 6,
    "name": "product2",
    "imageURL": "/images/6.jpeg",
    "price": 69,
    "slug": "product2"
  },

]

const Home = () => {
  return (
    <>
      <Banner />
      <div className='products-heading'> 
        <h2>Best Selling Products</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className='products-container'>
        {products.map((product)=> <Product key={product._id} product={product} />)}
      </div>

      <Contact />
    </>
  )
}

export default Home;

