import React from 'react';

const BusinessSummery = () => {
    return (
        <section className='mt-28 mb-28'>
            <div class="stats shadow mb-14">

                <div class="stat ">
                    <div class="stat-title">Total Page Views</div>
                    <div class="stat-value">89,400</div>
                    <div class="stat-desc">21% more than last month</div>
                </div>

            </div>

            <div class="stats shadow grid grid-cols-1">

                <div class="stat">
                    <div class="stat-figure text-info">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div class="stat-title">Total Likes</div>
                    <div class="stat-value text-info">25.6K</div>
                    <div class="stat-desc">21% more than last month</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div class="stat-title">Page Views</div>
                    <div class="stat-value text-secondary">2.6M</div>
                    <div class="stat-desc">21% more than last month</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <div class="avatar online">
                            <div class="w-16 rounded-full">
                                <img src="https://api.lorem.space/image/face?w=128&h=128" />
                            </div>
                        </div>
                    </div>
                    <div class="stat-value">86%</div>
                    <div class="stat-title">Tasks done</div>
                    <div class="stat-desc text-secondary">31 tasks remaining</div>
                </div>


            </div>
            <div className='mt-28'>
                <div class="stats bg-info text-primary-content">

                    <div class="stat">
                        <div class="stat-title">Account balance</div>
                        <div class="stat-value">$89,400</div>
                        <div class="stat-actions">
                            <button class="btn btn-sm btn-success">Add funds</button>
                        </div>
                    </div>

                    <div class="stat">
                        <div class="stat-title">Current balance</div>
                        <div class="stat-value">$89,400</div>
                        <div class="stat-actions ">
                            <button class="btn btn-sm">Withdrawal</button>
                            <button class="btn btn-sm mx-1">deposit</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BusinessSummery;