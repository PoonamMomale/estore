import React from 'react';
import './__top-nav.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function TopNav() {
    
    const cartItems = useSelector(state => state.cartReducer.totalItems);
    // console.log(cartItems)

  return (
    <>
         <div className='header bg-dark'>
            <div className='row top-nav-row'>
                  <div className='brand my-1'>
                      <h1>EStore</h1>
                   </div>
                  <div className='inp-container p-0 my-4 w-50 h-25 bg-white'>
                      <div className='dropdown m-0 p-0'>
                          <select className='select-button w-100 p-0 m-0'> 
                              <option>Men</option>
                              <option>Women</option>
                              <option>Kids</option>
                          </select>
                      </div>
                        <input className='form-control' placeholder='search..'/>
                        <button><i className='fa fa-search'></i></button>
                   </div>
                   <div className='login-container'>
                        <i className='fa fa-user-circle user-icon'></i>
                        <h5><a href='#'>Login</a></h5> / <h5><a href='#'>Register</a></h5>
                   </div>
                   <div className='cart-wishlist'>
                      <ul className='p-0'>
                        <li className='list-icon'><i className='fa fa-heart'></i></li>
                        <Link to='/cart'>
                        <li className='list-icon'><i className='fa fa-shopping-cart'></i>
                           {
                            cartItems !== 0 
                            ? 
                            <div id='cart-items-count'>
                              <p>{cartItems}</p>
                            </div>
                           : <></>
                           }
                        </li>
                        </Link>
                      </ul>
                   </div>
            </div>
       </div>
    </>
  )
}

export default TopNav;
