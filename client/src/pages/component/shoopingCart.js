import React, { useEffect, useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";


function ShoppingCart({ Cart }) {
    const cartItems = Cart;
    const [carts,setCarts] =useState(Cart);
    // setCarts(cartItems);
    useEffect(()=>{
        setCarts(cartItems);
    },[cartItems])

    
    

    const handleIncrement = async (product) => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const index = storedCartItems.findIndex(item => item._id === product._id);
        if (index !== -1) {
            storedCartItems[index].quantity = storedCartItems[index].quantity + 1;
            const data = localStorage.setItem('cartItems', JSON.stringify(storedCartItems));
            setCarts(data);
        }
    };


    const handleDecrement = async (product) => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const index = storedCartItems.findIndex(item => item._id === product._id);
        if (index !== -1) {
            storedCartItems[index].quantity = storedCartItems[index].quantity - 1;
            const data = localStorage.setItem('cartItems', JSON.stringify(storedCartItems));
            setCarts(data);
        }
    };

    const handleRemove = async (product) => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const index = storedCartItems.findIndex(item => item._id === product._id);
        if (index !== -1) {
            storedCartItems.splice(index, 1);
            var updatedData = JSON.stringify(storedCartItems);
            const data = localStorage.setItem('cartItems', updatedData);
            setCarts(updatedData);
        }
    };




    return (


        //cart modal part starts 
        <div className="cart-modal">
            <input type="checkbox" id="cart-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    {console.log(carts)}
                    {/* {console.log(cartItems.length)} */}
                    <h3 className="font-xl text-center text-3xl mb-5">Shopping Cart</h3>
                    {cartItems != null&& (

                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th>Products</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr>
                                        <td>
                                            <div className='cartDetails flex-align'>
                                                <div className='cartProduct w-5/12 mr-10'>
                                                    <img src={`http://localhost:8000/product/image/` + item.image} alt={item.name} />
                                                </div>
                                                <div className='cartquantity flex-column'>
                                                    <p>{item.name}</p>
                                                    <p className='quantity pl-4'><span id='add' ><button onClick={()=>handleIncrement(item)}>+</button>  </span>{item.quantity} <span id='remove' > <button onClick={()=>handleDecrement(item)}>-</button>  </span></p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            ${item.price}
                                        </td>
                                        <td>
                                            <button onClick={()=>handleRemove(item)}><RiDeleteBin6Line/></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
                <label className="modal-backdrop" htmlFor="cart-modal">Close</label>
            </div>
        </div>
    );
}


export default ShoppingCart;