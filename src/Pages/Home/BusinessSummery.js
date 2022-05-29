import React from 'react';
import backImage from '../../Images/footer.png'
import { GiFlyingFlag } from 'react-icons/gi'
import { AiOutlineFundProjectionScreen, AiOutlineUsergroupAdd, AiFillLike } from 'react-icons/ai'

const BusinessSummery = () => {

    return (
        <div style={{ backgroundImage: `url(${backImage})`, backgroundSize: 'cover' }}>
            <h1 className='text-6xl text-info text-center font-mono my-16'>Business Summary</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 place-items-center'>
                <div className='my-6 flex flex-col justify-center items-center'>
                    <GiFlyingFlag className='text-4xl  '></GiFlyingFlag>
                    <h1 className='text-6xl text-info my-4'>89+</h1>
                    <h3 className='text-info font-mono text-xl font-bold'>Country</h3>
                </div>
                <div className='my-6 flex flex-col justify-center items-center'>
                    <AiOutlineFundProjectionScreen className='text-4xl  '></AiOutlineFundProjectionScreen>
                    <h1 className='text-6xl text-info my-4'>554+</h1>
                    <h3 className='text-info font-mono text-xl font-bold'>Complete projects</h3>
                </div>
                <div className='my-6 flex flex-col justify-center items-center'>
                    <AiOutlineUsergroupAdd className='text-4xl '></AiOutlineUsergroupAdd>
                    <h1 className='text-6xl text-info my-4'>444+</h1>
                    <h3 className='text-info font-mono text-xl font-bold'>Happy client</h3>
                </div>
                <div className='my-6 flex flex-col justify-center items-center'>
                    <AiFillLike className='text-4xl  '></AiFillLike>
                    <h1 className='text-6xl text-info my-4'>599+</h1>
                    <h3 className='text-info font-mono text-xl font-bold'>Feedback</h3>
                </div>
            </div>
            <div className='flex items-center justify-around pb-6'>
                <div>
                    <h1 className='text-5xl text-info p-4 font-bold'>Do you have any question?</h1>
                    <p className='text-lg font-bold px-4'>Don't hesitate to contact us</p>
                </div>
                <div>
                    <button className='btn btn-info mx-2 sm:my-2 xs:my-2'> Request For Quote</button>
                    <button className='btn btn-info xl:m-2'>Contact us</button>
 
                </div>
            </div>
        </div>
    );
};


export default BusinessSummery;