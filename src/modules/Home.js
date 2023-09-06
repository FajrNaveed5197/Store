import React from 'react'
import Hero from '../components/Hero'
import Product from '../components/ProductCard'
import { useEffect } from 'react'
import { useState } from 'react'
import Categories from '../components/Categories'
const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const fetchProducts = async () =>{
        const response = await fetch ('https://fakestoreapi.com/products?limit=12');
        const data = await response.json()
        console.log(data)
        setProducts(data)
        }
        fetchProducts();
    },[]) 

  return (
    <div>
      <Hero/>
      <Categories/>
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-purple-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR PRODUCTS</h1>
      </div>
      {
        products.length > 0  ? 
        <Product products={products}/>
        :
        <div>LOADING...</div>

      }
            <Product/>
    </div>
  )
}

export default Home
