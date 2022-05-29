import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
//import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const PurchagePage = () => {

    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();

    const id = useParams();
    //console.log(id.id);
    const url = `https://still-taiga-05914.herokuapp.com/products/${id.id}`
    const { data: purchase, refetch } = useQuery("purchase", () => fetch(url).then(res => res.json()))

    const [quantityCount, setQuantityCount] = useState(10)
    const [price, setPrice] = useState(0)

    // console.log(quantityCount, price)
    const onSubmit = data => {
        const quantity = purchase?.availableQuantity - data.quantity
        const newQuantity = { quantity }
        const order = { email: data.email, productName: purchase?.name, price: price, quantity: data.quantity, phoneNumber: data.phone, address: data.address }

        fetch('https://still-taiga-05914.herokuapp.com/order', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        }).then(res => res.json())
            .then(data => {
                toast("Order successfully taken")
                reset()
            })

        const url = `https://still-taiga-05914.herokuapp.com/products/${id.id}`
        fetch(url, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newQuantity)
        })
            .then(res => res.json())
            .then(data => refetch())

    }


    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold m-6">{purchase?.name}</h1>
                        <div className='flex m-4'>
                            <img src={purchase?.img} class="max-w-sm rounded-lg shadow-2xl" alt="" />
                            <div class="py-6 ml-8">
                                <h1 className='my-4 text-3xl text-info'>Product description</h1>
                                <p >{purchase?.description}</p>
                                <span className='btn btn-info text-xl my-4'>Available quantity: {purchase?.availableQuantity}</span>
                                <span className='btn btn-info text-xl'>Price: ${purchase?.price}</span>
                            </div>
                        </div>


                    </div>
                    



                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="card-body">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input
                                        {...register("email", { required: true })}
                                        type="email"
                                        class="input input-bordered"
                                        value={user?.email}
                                    />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input
                                        {...register("name", { required: true })}
                                        type="text"
                                        class="input input-bordered"
                                        value={user?.displayName}
                                    />
                                </div>


                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Your phone number</span>
                                    </label>
                                    <input
                                        {...register("phoneNumber", { required: true })}
                                        type="number"
                                        placeholder="Phone number"
                                        class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">
                                            Address
                                        </span>
                                    </label>
                                    <input
                                        {...register("address", { required: true })}
                                        type="text"
                                        placeholder="Delivery address"
                                        class="input input-bordered" />
                                </div>

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">
                                            Quantity
                                        </span>
                                    </label>
                                    <input
                                        {...register("quantity", { required: true })}

                                        type="number"
                                        placeholder={`Minimum order quantity 10 pice`}
                                        class="input input-bordered"
                                        onChange={(e) => {
                                            setQuantityCount(e.target.value)
                                            setPrice(e.target.value * purchase?.price)
                                        }} />
                                    {
                                        quantityCount > purchase?.availableQuantity ? <span className='text-red-600'>{`Available quantity ${purchase?.quantity}`}</span> : ""
                                    }
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">
                                            Price
                                        </span>
                                    </label>
                                    <input
                                        {...register("price")}
                                        value={price}
                                        type="number"
                                        placeholder="Price"
                                        class="input input-bordered" required />
                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-info mb-5" type='submit' disabled={purchase?.availableQuantity < quantityCount || quantityCount < 10}>Place Order</button>
                                </div>



                            </div>

                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default PurchagePage;