import React, { useEffect, useState } from 'react'
import FeatureCard from './FeatureCard'
const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        const fetchCategory = async () =>{
        const response = await fetch(`https://fakestoreapi.com/products/categories`);
        const data = await response.json()
        console.log(data)
        setCategories(data)
        }
        fetchCategory();
    },[]) 

if(categories.length ===0){
    return(
          (<div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
      </div>) 
    )
}
  return (
  
        <FeatureCard cards={categories} />

        

  )
}

export default Categories
