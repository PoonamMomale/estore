import React from 'react';
import './__cat-nav.scss';

function CatNav() {
  return (
    <>
        <div className='catnav-container container'>
            <ul>
                <li className='list-items'><a href='#'>Men</a></li>
                <li className='list-items'><a href='#'>Women</a></li>
                <li className='list-items'><a href='#'>Kids</a></li>
                <li className='list-items'><a href='#'>Best Offers</a></li>
            </ul>
        </div>
    </>
  )
}

export default CatNav;
