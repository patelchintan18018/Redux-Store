import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';
import { NavLink } from 'react-router-dom';

function SingleProduct({item}) {

  const dispatch = useDispatch()

  const addToCart = (item)=>{
    dispatch(add(item))
  }

  

  return (
    <div key={item.id} className='w-100 h-100 shadow-lg p-5 my-3 rounded-3xl'>
      <div className='flex justify-center items-center'>
        <img src={item.image} alt='image'  className='w-[200px] h-[300px] my-3'/>
      </div>
      <div className='my-5'>
        <h3 className='my-2 font-bold'>{item.title}</h3>
        <h3>INR : {item.price}</h3>
      </div>
      <div className='text-center font-semibold text-white'>
        <button className='p-2 bg-blue-500 rounded mt-3 mx-2 hover:bg-sky-400 hover:text-black' onClick={()=>addToCart(item)}>Add to Cart</button>
        <NavLink  to ={`/product/${item.id}`} className='p-2 bg-blue-500 rounded mt-3 mx-2 hover:bg-sky-400 hover:text-black' >View</NavLink>
      </div>
      
    </div>
  )
}

export default SingleProduct