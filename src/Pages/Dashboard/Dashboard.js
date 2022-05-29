import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/UseAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    console.log(admin, user.email);

    // user admin load and && use in LINK to hide
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-2xl font-bold text-red-300 m-5'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">

                    <li><Link to="/dashboard">My profile</Link></li>
                    {
                        admin ?
                            <>
                                <li><Link to="/dashboard/alluser">All Users</Link></li>
                                <li><Link to="/dashboard/manageOrder">ManageAllOrders</Link></li>
                            </>
                            :
                            <>
                                <li><Link to="/dashboard/orders">My Orders</Link></li>
                                <li><Link to="/dashboard/review">Add Review</Link></li>

                            </>
                    }

                    <li><Link to="/dashboard/payment">Payment</Link></li>

                </ul>

            </div>
        </div>
    );
};


export default Dashboard;