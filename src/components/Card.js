import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity } from "../redux/ProductDetails";
import { addCart,updateCart } from "../redux/CartDetails";
import DynamicPopup from './DynamicPopup';
import CartPopup from "./CartPopup"

const Card = () => {
    const { products } = useSelector(state => state.product);
    const { cart } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const [openPopup, setOpenPopup] = useState(false);
    const [lableQuantity,setLableQuantity] = useState(0)


    const increaseQuantity = (product) => {

        let count = product.quantity + 1;
        dispatch(updateQuantity({ id: product.id, quantity: count }))
        setLableQuantity(lableQuantity + 1)

    }

    const decreaseQuantity = (product) => {
        if(lableQuantity !== 0){
        if (product.quantity !== 0) {
            let count = product.quantity - 1;
            dispatch(updateQuantity({ id: product.id, quantity: count }))
            if(lableQuantity !== 0){
            setLableQuantity(lableQuantity - 1)
            }
        }
    }
    }

    const addToCart = (product) => {
        if(lableQuantity !== 0){
        if (product.quantity !== 0) {
            const checkcart = cart.filter((pro) => {
                if (pro.id === product.id) {
                    return pro;
                }
            })
            console.log(checkcart,"checkcart")

            if (checkcart.length === 1) {
               
                let totalPrice = product.quantity * product.price;
                dispatch(updateCart({
                    id: product.id,
                    quantity:product.quantity,
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
            setLableQuantity(0)
        }
    }

    }


    return (
        <div className="mx-auto mt-3 grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 mb-4">
            {products.map((product, i) => {
                return (

                    <div className='card outline outline-offset-0 hover:bg-gray-300'>
                        <div className='flex justify-center'>
                            <img src={product.image} alt="..." className=' h-32 sm:h-48 object-cover mt-6 mb-4' />
                        </div>
                        <div className='flex justify-center'>

                            <h1 className="text-xl  font-bold ml-15">{product.title}</h1>

                        </div>

                        <div className='flex justify-center'>

                            <h1 className="text-xl  font-bold ml-15 mb-1">{"₹" + product.price}</h1>

                        </div>

                        <div className='flex justify-center gap-3 mt-1'>
                            <button className='w-5 bg-black text-white' onClick={() => increaseQuantity(product)}>+</button>
                            <div className='w-5 text-center'>{lableQuantity}</div>
                            <button className='w-5 bg-black text-white' onClick={() => decreaseQuantity(product)}>-</button>
                        </div>

                        <div className='flex justify-center'>

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
    )
}

export default Card