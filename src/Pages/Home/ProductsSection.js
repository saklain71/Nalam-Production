import React, { useEffect, useState } from 'react';
import Products from './Products';

const ProductsSection = () => {
    const [product, setProducts] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3'>
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