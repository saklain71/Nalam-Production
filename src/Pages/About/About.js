import React from 'react';

const About = () =>  {
    return (
        <div className="lg:flex">
            
            <div className="flex-auto bg-red-300  lg:w-32 lg:px-16 lg:py-32">
                <h1 className='text-white  lg:text-3xl uppercase font-mono'><u>Knowledge About Technology</u> </h1>
                <ul className='list-decimal text-xl text-black m-12'>
                    <li>HTML</li>
                    <li>Css</li>
                    <li>Tailwind</li>
                    <li>Bootstrap</li>
                    <li>Javascript</li>
                    <li>React js</li>
                    <li>Node js</li>
                    <li>Firebase</li>
                </ul>
            </div>
            <div className="bg-red-300 flex-auto lg:w-64 ">
                <div className='p-6 lg:mx-24 lg:my-32'>
                    <h1 className='text-black text-3xl lg:text-3xl uppercase font-mono'>Saklain Mustak</h1>
                    <p className='my-6 font-bold lg:text-lg'>
                       Email: saklain71@gamil.com
                    </p>
                    <p className='my-6 text-white lg:text-2xl'>
                       <u> Educational Background</u>
                    </p>
                    <div class="overflow-x-auto">
                        <table class="table w-full">

                            <thead>
                                <tr>
                                    <th>Year</th>
                                    <th>Institute</th>
                                    <th>Degree</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>2012</td>
                                    <td>Pabna Cadet Collegiate School, Pabna</td>
                                    <td>SSC</td>
                                </tr>

                                <tr>

                                    <td>2014</td>
                                    <td>Dhaka City College</td>
                                    <td>HSC</td>
                                </tr>

                                <tr>

                                    <td>2016-2020</td>
                                    <td>National University</td>
                                    <td>Computer Science And Engineering</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default About;