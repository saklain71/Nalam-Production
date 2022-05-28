import React from 'react';

const PurchaseDetails = ({products}) => {
    console.log(products);
    //const {img, name, description, minOrderQuantity, availableQuantity, price} = products;
    return (
        <div>
            
            <div className="card w-96 bg-base-100 shadow-xl ">
                        <figure className="px-10 pt-10">
                            <img src={products.img} alt="Shoes" className="rounded-xl h-28" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title"><u>{products.name}</u></h2>
                            <p><b>Price : $</b>{products.price}<span className="text-info">/unit</span></p>
                            <p><b> Min Order Quantity :</b>{products.minOrderQuantity}</p>
                            <p><b> Available Quantity : </b>{products.availableQuantity}</p>
                            <p>{products.description}</p>
                        </div>
                    </div>
        </div>
    );
};

export default PurchaseDetails;