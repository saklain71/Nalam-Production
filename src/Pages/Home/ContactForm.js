import React from 'react';
import img from '../../Images/ConBackImg.jpg'

const ContactForm = () => {
    return (
        <section>


            <div class="hero min-h-screen bg-base-200" style={{
                background: `url(${img})`,
                backgroundSize: 'cover'
            }}>
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold text-red-300">Business Policy</h1>
                        <p class="py-6 text-primary">
                            A common policy is to prohibit the use of drug, alcohol or tobacco on company property during work hours or at company functions. If smoking is permitted, policies will describe the procedures that must be followed.
                        </p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Company Name</span>
                                </label>
                                <input type="text" placeholder="name" class="input input-bordered mb-5" />
                            </div>
                            <textarea  name="companyDetails" placeholder=' Write here about your Company Info' id="" cols="20" rows="5"></textarea>
                            <div class="form-control mt-6">
                                <button class="btn btn-info">Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;