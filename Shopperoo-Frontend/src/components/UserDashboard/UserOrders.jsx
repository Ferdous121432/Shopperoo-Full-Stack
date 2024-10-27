import { useForkRef } from "@mui/material";
import React, { useEffect } from "react";
import { getOrdersByUser } from "../../api/order";
import { useAuth } from "../../context/AuthProvider";
import { Link } from "react-router-dom";

export default function UserOrders() {
  const { state } = useAuth();

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await getOrdersByUser(state.token);
      console.log(orders);
    };

    fetchOrders();
  }, [state.token]);

  const [orders, setOrders] = React.useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await getOrdersByUser(state.token);
      setOrders(orders);
    };

    fetchOrders();
  }, [state.token]);

  return (
    <div className="flex min-w-[550px] flex-col gap-2 border-2 border-slate-400 px-5 py-10">
      <div className="flex flex-row justify-between">
        <h1 className="font-semibold text-slate-950">Order ID</h1>
        <h1 className="font-semibold text-slate-950">Order Date</h1>
        <h1 className="font-semibold text-slate-950">Amount</h1>
        <h1 className="font-semibold text-slate-950">Status</h1>
        <h1 className="font-semibold text-slate-950">Invoice</h1>
      </div>
      <div className="relative py-1">
        <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-100 bg-yellow-primary"></span>
      </div>
      <div>
        {orders.length === 0 ? (
          <div>No orders</div>
        ) : (
          orders.map((order) => (
            <div key={order._id} className="flex flex-row justify-between">
              <p>{order._id}</p>
              <p>{order.createdAt}</p>
              <p>{order.total_amount}</p>
              <p
                className={
                  order.status === "delivered" ? "text-yellow-50" : "text-green"
                }
              >
                {order.status}
              </p>
              <Link to={`/order/${order.id}`}>View</Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
