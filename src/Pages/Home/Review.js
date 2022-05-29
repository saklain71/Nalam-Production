import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Review = ({ review }) => {
    // const {data.name, ratings} = review;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <div className=" items-center">
                    <div>
                        <h4 className='text-xl'><b>{review.name}</b></h4>

                        <div className='flex justify-center items-center text-xl'>
                             {review.ratings} <AiFillStar className='text-warning'></AiFillStar>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;