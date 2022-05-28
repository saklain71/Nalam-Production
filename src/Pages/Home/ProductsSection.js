import React, { useEffect, useState } from 'react';
import Products from './Products';

const ProductsSection = () => {
    const [product, setProducts] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 sm:grid-cols-2'>
             {
                
                product.map(products => <Products
                   
                key={products.id}
                products= {products}
                >

                </Products>)
            }
        </div>
    );
};

export default ProductsSection;