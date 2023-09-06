import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const CategoryProducts = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/category/${name}`);
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchCategoryProducts();
  }, [name]); 

  if (products.length === 0) return  (<div className="flex justify-center items-center h-screen">
  <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
</div>);
  
  return (
    <ProductCard products={products} />
  );
};

export default CategoryProducts;
