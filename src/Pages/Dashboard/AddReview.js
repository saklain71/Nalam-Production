import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const [items, setItems] = useState();
    //const [user] = useAuthState(auth);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [items])

    // from react hook form
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data)

        e.target.reset();

        fetch('http://localhost:5000/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))
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