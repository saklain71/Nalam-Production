import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
    const [items, setItems] = useState();

    useEffect(() => {
        fetch('https://still-taiga-05914.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [items])

    // from react hook form
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {

        e.target.reset();

        fetch('https://still-taiga-05914.herokuapp.com/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                toast('Your Review Added to Home');
            })
    };


    return (

        <div className='flex'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs mb-5"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    },
                                })}
                            />
                            <input
                                type="text"
                                placeholder="Write Here"
                                className="input input-bordered w-full max-w-xs mb-5"
                                {...register("comment", {
                                    required: {
                                        value: true,
                                        message: 'Write your Comment Please'
                                    },
                                })}
                            />
                            <input
                                type="number"
                                placeholder="Give Ratings Out of 5"
                                className="input input-bordered w-full max-w-xs"
                                {...register("ratings", {
                                    required: {
                                        value: true,
                                        message: 'Rating Number is Required'
                                    },
                                })}
                            />
                        </div>

                        <input className='btn w-full max-w-xs text-white mt-5' type="submit" value="Add Review" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default AddReview;