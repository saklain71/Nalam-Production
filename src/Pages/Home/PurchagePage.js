import React, { useEffect, useState } from 'react';
//import PurchaseDetails from './PurchaseDetails';

const PurchagePage = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products/')
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [products])
    return (
        <div>
            <h2>Please Purchase From Here</h2>
            {/* {products.length}
            {
                products.map(products => <PurchaseDetails
                key={products._id}
                products = {products}
                />)
            } */}

        </div>
    );
};

export default PurchagePage;