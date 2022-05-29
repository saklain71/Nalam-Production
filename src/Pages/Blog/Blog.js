import React from 'react';

const Blog = () => {
    return (
        <div className='px-12 m-10'>
            <div className=' shadow-lg text-left p-8'>
                <h1 className='text-2xl font-serif my-4 font-bold'>Why you do not set the state directly in React ?</h1>
                <p className='text-lg font-mono'>
                    we know that react state is immutable that's why we can't change it directly if we change it will contain the value but not render on load . in next loading it will give us the value.
                </p>
                <h1 className='text-2xl font-serif my-4 font-bold'>How will you improve the performance of a React Application?</h1>
                <p className='text-lg font-mono'>There is so many option to improve performance of a react application. primarily i will focus 4-5 option.</p>
                <ul className='text-lg '>
                    <li>
                        <h1 className='text-info text-xl my-2 text-left font-bold'>  Bundle file slipt:</h1>
                        <p> Usually when we build or file react give us a js bundle file if file size is quite have then i have to spite then file in many pice. then it will run faster then previous</p>
                    </li>
                    <li>
                        <h1 className='text-info text-xl my-2  font-bold'>Large Rendering:</h1>
                        <p>When i have a data table with thousand of data or row . that time i can load only those row which row user see. i can use window tools for this loading system</p>
                    </li>
                    <li>
                        <h1 className='text-info text-xl my-2 text-left font-bold'>Useless rendering</h1>
                        <p className='text-left'>Rendering depend on dependency and prose so we have to be aware of useless props and dependency.</p>
                    </li>
                    <li>
                        <h1 >Lazy loading // Download on demand</h1>
                        <p>When user need data that time will load data on my demand. other wise browser can crash for millions of data.</p>
                    </li>

                </ul>
          
                <h1 className='text-2xl font-serif my-4 text-left font-bold'> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                <p className='text-lg font-mono text-left'>
                    suppose i have an array name user and it's includes object with a name property . if i have to find any property by name i will write this code <br />

                    <span className='text-info'>user.map(u = > console.log(u.name.includes(searchquery)))</span>
                </p>
              
                <h1 className='text-2xl font-serif my-4  font-bold'>What is a unit test?</h1>
                <p className='text-lg font-mono'>
                    unit means a small part. In programing unit test means a process of testing code , component or function is working properly.
                </p>
                <h1 className='text-2xl font-serif my-4  font-bold'> Why should write unit tests?</h1>
                <p className='text-lg font-mono'>
                    Unit test is very important for those think.
                    <ul>
                        <li>1.Easy to debugging and find bugs</li>
                        <li>2.Reduce cost</li>
                        <li>3.Process become easier</li>
                        <li>4.easy to update and refactoring codes</li>
                    </ul>
                </p>
              
                <h1 className='text-2xl font-serif my-4  font-bold' >What are the different ways to manage a state in a React application ?</h1>
                <p className='text-lg font-mono'>There are four way to manage state in react application</p>
                <ul className='text-lg'>
                    <li>Local state</li>
                    <ul>Global state</ul>
                    <li>Url state</li>
                    <li>Server state</li>
                </ul>
         
            </div>
        </div>
    );
};



export default Blog;