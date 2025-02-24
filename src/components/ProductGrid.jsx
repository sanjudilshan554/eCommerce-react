import Products from '../assets/productsContent'

import React from 'react'
import products from '../assets/productsContent'
import ProductCard from './ProductCard';

function ProductGrid() {
    console.log(products);
  return (
    <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {products.map((product)=>{
            return (
                <ProductCard key={product} product={product}/>
            )
        })}
    </div>
  )
}

export default ProductGrid