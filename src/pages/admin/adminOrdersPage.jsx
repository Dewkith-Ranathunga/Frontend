import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "react-modal";

export default function AdminOrdersPage() {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsOpen] = useState(false);
    const [activeOrder, setActiveOrder] = useState(-1);


    useEffect(() => {
        if (isLoading) {
            const token = localStorage.getItem("token");
            if (!token) {
                alert("Please login first");
                return;
            }
            axios
                .get(import.meta.env.VITE_BACKEND_URL + "/api/order", {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                })
                .then((res) => {
                    console.log(res.data);
                    setOrders(res.data);
                    setIsLoading(false);
                })
                .catch((e) => {
                    alert(
                        "Error fetching orders: " +
                            (e.response?.data?.message || "Unknown error")
                    );
                    setIsLoading(false);
                });
        }
    }, [isLoading]);
/*
0
: 
{_id: '681cfd113c7ece7815a53c92', orderId: 'CBC00001', email: 'testuser2@example.com', name: 'Test1 User', phone: 'sdcsdv', …}
1
: 
address
: 
"ddcc"
date
: 
"2025-05-09T16:38:23.452Z"
email
: 
"testuser2@example.com"
labelledTotal
: 
35
name
: 
"Test1 User"
orderId
: 
"CBC00002"
phone
: 
"sdcsdv"
products
: 
Array(2)
0
: 
{productInfo: {…}, quantity: 1, _id: '681e2f7f9916722268b1ea28'}
1
: 
{productInfo: {…}, quantity: 2, _id: '681e2f7f9916722268b1ea29'}
length
: 
2
[[Prototype]]
: 
Array(0)
status
: 
"pending"
total
: 
28
__v
: 
0
_id
: 
"681e2f7f9916722268b1ea27"
[[Prototype]]
: 
Object
*/
    return (
        <div className="w-full h-full p-6 bg-white rounded-lg shadow-md border border-gray-200">
            {isLoading ? (
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                </div>
            ) : (
                <>
                    <Modal
                        isOpen={isModalOpen}
                        onAfterOpen={() => {}}
                        onRequestClose={() => setIsOpen(false)}
                        contentLabel="Example Modal"
                    >
                        <div className="p-4">

                        </div>
                    </Modal>
                    <table className="w-full table-auto">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Total</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => {
                                return (
                                    <tr onClick={() =>{ setActiveOrder(index); setIsOpen(true); }} key={index} className="text-center border-t">
                                        <td className="py-2 px-4">{order.orderId}</td>
                                        <td className="py-2 px-4">{order.name}</td>
                                        <td className="py-2 px-4">{order.email}</td>
                                        <td className="py-2 px-4">{order.address}</td>
                                        <td className="py-2 px-4">{order.phone}</td>
                                        <td className="py-2 px-4">${order.total}</td>
                                        <td className="py-2 px-4">{new Date(order.date).toLocaleDateString()}</td>
                                        <td className="py-2 px-4 capitalize">{order.status}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
}