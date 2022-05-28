import React from 'react';

const Review = ({review}) => {
   // const {data.name, ratings} = review;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
               <div className=" items-center">
                    <div>
                        <h4 className='text-xl'><b>{review.data.name}</b></h4>
                        <p>Ratings:  *** </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;