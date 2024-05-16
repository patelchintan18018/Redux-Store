import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {

const cartProducts = useSelector((state) => state.cart.myBag)
const totalItemQuantity = cartProducts.reduce((prev,curr) => prev += curr.itemQuantity , 0)

  return (
    <div>
        <ul className='flex flex-cols justify-around items-center my-10 font-semibold text-2xl'>
            <li className=''>
                <NavLink to='/'  className={({isActive})=>`${isActive?"active":""}`}>Home</NavLink>
            </li>
            <li className='flex flex-cols justify-center'>
                <NavLink to='/Basket' className={({isActive})=>`${isActive?"active":""}`}>Basket
                <span className='text-sm align-top bg-blue-500 rounded-xl p-1 ml-2 text-white'>{totalItemQuantity}</span></NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar