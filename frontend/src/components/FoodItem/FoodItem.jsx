import React, { useState,useContext } from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { StoreContext} from '../../context/StoreContext';
const FoodItem=({id,name,descripton,price,img}) =>{
  const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext);
  return (
    <div id='food-item'>
     <div className='food-item-img-container'>
       <img className='food-item-image' src={url+"/images/"+img} alt=""></img>
{
   !cartItems[id]?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white } alt=""/>
  :<div className='food-item-counter'>
<img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} />
<p>{cartItems[id]}</p>
<img onClick={()=>addToCart(id)} src={assets.add_icon_green} />


  </div>
}
     </div>
     <div className='food-item-info'>
      <div className='food-item-name-rating'>
      <p>{name}</p>
      <img src={assets.rating_starts}></img>
      </div>
      <p className='food-item-desc'>{descripton}</p>
      <p className='food-item-price'>${price}</p>
     </div>
    </div>
  )
}

export default FoodItem