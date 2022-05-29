import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ModalCancel from '../Dashboard/ModalCancel';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';


const MyOrders = () => {
    const [user] = useAuthState(auth);
    const email = user?.email
    const url = `https://still-taiga-05914.herokuapp.com/order?email=${email}`
    const { data: myorders, refetch } = useQuery("myorders", () => fetch(url).then(res => res.json()))
    console.log(user , myorders)
    return (
        <div>
            <h1 className='text-bold text-2xl m-5'>{user.displayName}'s  Orders </h1>
            <div >
                <table class="table table-zebra table-compact w-full">

                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Product Name</th>
                            <th>price</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myorders?.map((item, index) => <tr key={index}>

                                <th>{index + 1}</th>
                                <td>{item.productName}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td> <button class="btn btn-xs btn-info"><Link to={'/dashboard/payment'}>Pay</Link></button></td>
                                <td>
                                    <label
                                        for="Order-Cancel-Modal" class="btn btn-xs bg-red-300"
                                    >Cancel</label>
                                    <ModalCancel
                                        item={item}
                                        refetch={refetch}
                                    ></ModalCancel>
                                </td>
                            </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>)

};

export default MyOrders;