import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import './__product-detail.scss';
import { addCartItem } from '../../Redux/slices/Cart/cartSlice';

function ProductDetails() {

    const location = useLocation();
    const dispatch = useDispatch();
    // console.log(location);
    
    const addtoCart = () =>{
        dispatch(addCartItem(location.state));
    }
  return (
<div>
    <div className='row container my-5 product-details-container'> 
         <div className='col-5 product-image-container'>
                <img src={require('../../assets/images/'+location.state.product_img)}/>
         </div>
        <div className='col-7 product-info'>
                <span id='product-name'>{location.state.product_name}</span>
            
             <div className='rating-container'>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
             </div>
             <hr/>
            <div className='product-price'>
                MRP : <span className='price'>{location.state.price}</span>
                <div style={{fontSize: '0.8em'}}>Inclusive of all taxes.</div>
            </div>
            <div className='my-3 product-description'>
                <span>Some Product Description Given Here.. </span>
            </div>
            <div className='my-5'>
                <div className='btn btn-warningncart-button'>
                    <div className='cart-icon-container'>
                        <i className='fa fa-shopping-cart'></i>
                    </div>
                    <div className='cart-text-container' onClick={addtoCart}>
                        <p>Add to cart</p>
                    </div>
                </div>
            </div>
         </div>
    </div>
</div>
  )
}

export default ProductDetails;
