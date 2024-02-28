import React from 'react';
import './__filled-cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantity, deleteCartItem } from '../../../Redux/slices/Cart/cartSlice';

function FilledCart() {

  const cart = useSelector(state => state.cartReducer);
  const dispatch = useDispatch();
  // console.log(cart)

  const quantityHandler = (e,item,key) =>{
    const payload = {
      operator: e.target.innerText,
      item,
      key
    };
    dispatch(changeQuantity(payload));
  }

  const deleteHandler = (item) =>{
      dispatch(deleteCartItem(item));
  }

  return (
    <div>
         <div className='row my-5 fc-main-div'>
            <div className='col-9 p-4'>
                {
                  cart.cartItems.map((item,key)=>{
                    return(
                      <div className='row cart-item-card'>
                          <div className='col-4'>
                              <img src={require('../../../assets/images/'+item.product_img)} />
                          </div>
                          <div className='col-8'>
                              <div className='p-3 cart-item-details'>
                                  <span className='cart-item-name'>{item.product_name}</span>
                                  <div className='cart-item-price'>
                                      <span>{item.price}</span>
                                  </div>
                                  <div>
                                      <i className='fa fa-star text-warning'></i>
                                      <i className='fa fa-star text-warning'></i>
                                      <i className='fa fa-star text-warning'></i>
                                      <i className='fa fa-star text-warning'></i>
                                      <i className='fa fa-star text-warning'></i>
                                  </div>
                                  <hr/>

                                  <div className='cart-edit-container'>
                                    <div className='btn-group mx-3' onClick={(e)=>quantityHandler(e,item,key)}>
                                      <div className='btn btn-outline-dark'>
                                         <span> - </span>
                                      </div>
                                      <div className='btn'>
                                          {item.quantity}
                                      </div>
                                      <div className='btn btn-outline-dark'>
                                          <span> + </span>
                                      </div>
                                    </div>
                                    <div className='btn btn-outline-danger mx-4' onClick={()=>deleteHandler(item)}>
                                        <span><i className='fa fa-trash mx-2'>Remove item</i></span>
                                    </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                    )
                  })
                }
            </div>
            <div className='col-3 px-4 py-3 my-4 cart-summary'>
                  <h2 className='mb-5 mt-3'>Summary</h2>
                  <div>
                      <span> Cart Total : ${cart.totalItemsPrice} </span>
                      <span>Shipping Charges : Free</span>
                      <span className='summary-total'>Total: ${cart.totalItemsPrice} </span>
                      <hr/>
                  </div>
                  <div className='btn btn-outline-dark w-100 mb-4 mt-1'>
                    Checkout
                  </div>
            </div>
         </div>
    </div>
  )
}

export default FilledCart;
