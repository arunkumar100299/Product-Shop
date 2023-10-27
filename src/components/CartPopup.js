import React from 'react'
import { useSelector } from 'react-redux'

const CartPopup = () => {
  const { cart } = useSelector(state => state.cart);
  console.log(cart, "cart>>")
  return (
    <div className="mx-auto mt-3 grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 mb-4">
      {cart.map((cart, i) => {
        return (

          <div key={i} className='card outline outline-offset-0 hover:bg-gray-300'>
            <div className='flex justify-center'>
              <img src={cart.image} alt="..." className=' h-32 sm:h-48 object-cover mt-6 mb-4' />
            </div>
            <div className='flex justify-center'>

              <h1 className="text-xl  font-bold ml-15">{"Product : " + cart.title}</h1>

            </div>

            <div className='flex justify-center'>

              <h1 className="text-xl  font-bold ml-15 mb-1">{"Price  : " + "₹" + cart.price}</h1>

            </div>
            <div className='flex justify-center'>

              <h1 className="text-xl  font-bold ml-15 mb-1">{"Quantity : " + cart.quantity}</h1>

            </div>
            <div className='flex justify-center'>

              <h1 className="text-xl  font-bold ml-15 mb-1">{"Total Price : " + "₹" + cart.totalPrice}</h1>

            </div>




            <div className='flex justify-center'>

              <button className='w-full bg-blue-400 text-white mt-2' >Place Order</button>

            </div>


          </div>


        )
      })}


    </div>
  )
}

export default CartPopup