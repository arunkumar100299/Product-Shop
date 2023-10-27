import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity } from "../redux/ProductDetails";
import { addCart, updateCart } from "../redux/CartDetails";
import DynamicPopup from './DynamicPopup';
import CartPopup from "./CartPopup"


const Card = () => {
    const { products } = useSelector(state => state.product);
    const { cart } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const [openPopup, setOpenPopup] = useState(false);


    const increaseQuantity = (product) => {

        let count = product.quantity + 1;
        dispatch(updateQuantity({ id: product.id, quantity: count }))

    }

    const decreaseQuantity = (product) => {

        if (product.quantity !== 0) {
            let count = product.quantity - 1;
            dispatch(updateQuantity({ id: product.id, quantity: count }))

        }

    }

    const addToCart = (product) => {

        if (product.quantity !== 0) {
            const checkcart = cart.filter((pro) => {
                if (pro.id === product.id) {
                    return pro;
                }
            })
            console.log(checkcart, "checkcart")

            if (checkcart.length === 1) {

                let totalPrice = product.quantity * product.price;
                dispatch(updateCart({
                    id: product.id,
                    quantity: product.quantity,
                    totalPrice: totalPrice,

                }))

            }
            else {

                let totalPrice = product.quantity * product.price;
                dispatch(addCart({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    quantity: product.quantity,
                    totalPrice: totalPrice
                }))
            }

            setOpenPopup(true)

        }


    }


    return (

        {
            ...products.length !== 0 ? (
                <div className="mx-auto mt-3 grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 mb-4">
                    {products.map((product, i) => {
                        return (

                            <div className='card outline outline-offset-0 hover:bg-gray-300 rounded-md'>
                                <div className='flex justify-center'>
                                    <img src={product.image} alt="..." className=' h-32 sm:h-48 object-cover mt-6 mb-2' />
                                </div>
                                <div className='flex justify-center'>

                                    <h1 className="text-xl  font-bold ml-15">{product.title}</h1>

                                </div>

                                <div className='flex justify-center'>

                                    <h1 className="text-xl  font-bold ml-15 mb-1">{"₹" + product.price}</h1>

                                </div>


                                <div className='flex'>
                                    <div className="flex-1 text-center pl-10 text-md pt-1  font-bold">
                                         count in cart  :
                                    </div>
                                    
                                    <div className="flex-1 text-center pr-12">
                                    <div className='flex justify-center gap-3 mt-1'>
                                        <button className='w-5 bg-black text-white' onClick={() => increaseQuantity(product)}>+</button>
                                        <div className='w-5 text-center'>{product.quantity}</div>
                                        <button className='w-5 bg-black text-white' onClick={() => decreaseQuantity(product)}>-</button>
                                    </div>
                                    </div>
                                </div>


                                <div className='flex justify-center mt-2 '>

                                    <button className='w-full bg-yellow-400 text-black mt-2' onClick={() => addToCart(product)}>Add To Cart</button>

                                </div>


                            </div>


                        )
                    })}

                    {openPopup === true && (
                        <DynamicPopup
                            openPopup={openPopup}
                            title="Cart Details"
                            onClose={() => {

                                setOpenPopup(false);


                            }}
                            maxWidth="md"
                        >
                            <CartPopup
                                setOpenPopup={setOpenPopup}

                            />
                        </DynamicPopup>
                    )}
                </div>
            ) : (
                <div className="text-center m-6 border-2 ">
                    <h1 className="sm:text-sm md:text-xl">  Product list is empty please add new product !!!</h1>
                </div>
            )
        }

    )
}

export default Card