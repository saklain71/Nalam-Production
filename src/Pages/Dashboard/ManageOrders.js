import React from 'react';
import { useQuery } from 'react-query';
import ModalCancel from './ModalCancel';

const ManageOrders = () => {

  
    const url = `https://still-taiga-05914.herokuapp.com/allorder`
    const { data: myorders, refetch } = useQuery("myorders", () => fetch(url).then(res => res.json()))
    
    return (
        <div>
           
            <div >
                <table class="table table-zebra table-compact w-full">

                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Product Name</th>
                            <th>price</th>
                            <th>Quantity</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myorders?.map((item, index) => <tr key={index}>

                                <th>{index + 1}</th>
                                <td>{item.productName}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
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

export default ManageOrders;