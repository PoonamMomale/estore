import React, { useEffect } from 'react';
import './__products.scss';
import { useDispatch, useSelector } from 'react-redux';
import productSlice from '../../Redux/slices/productSlice/productSlice';
import { getProducts } from '../../Redux/slices/productSlice/actions';
import { addCartItem } from '../../Redux/slices/Cart/cartSlice';
import { Link } from 'react-router-dom';

function Products() {
    
    // const productData = useSelector(productSlice.getInitialState);

    const productData = useSelector(state => state.productReducer.products);
    const cart = useSelector(state => state.cartReducer);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts());
    },[]);

    const addToCart = (itemData) =>{
        const payload = {...itemData, quantity:1};
        dispatch(addCartItem(payload));
    }

    // console.log(productData);
    // console.log(cart);

  return (
    <div className='products-container'>
    {
        productData.map((product,key)=>{
            return(
            <div className='mx-5 p-3 col-lg-3 col-md-6 product-card'>
                <Link to='/product-details' state={product}>
                    <div className='product-image-container'>
                        <img src={require('../../assets/images/'+product.product_img)}/>
                    </div>
                </Link>
                <div className='product-info'>
                    <h5><Link to='/product-details' state={product}>{product.product_name}</Link></h5>
                    <p className='product-price'>$ {product.price}</p>
                    <div className='product-rating'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                    </div>
                </div>
                <div className='my-3' onClick={()=>addToCart(product)}>
                    <div className='cart-button'>
                        <div className='cart-icon-container'>
                           <i className='fa fa-shopping-cart mx-4'></i>
                        </div>
                        <div className='cart-text-container mx-3'>
                            <p>Add to Cart</p>
                        </div>
                    </div>
                </div>
            </div>
            )
        })
    }
    </div>
  )
}

export default Products;
