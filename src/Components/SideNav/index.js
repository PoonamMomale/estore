import React from 'react';
import './__side-nav.scss';

function SideNav() {
  return (
    <>
        <div className='side-nav'>
            <div className='section-title'>
                    <h3>Category</h3>
            </div>
            <div className='accordion'>
                <div className='accordion-item individual-category'>
                    <div className='accordion-header'>
                        <button className='accordion-button' data-bs-target='#accordion-heading-one' data-bs-toggle='collapse'>
                            <div className='category-title'>
                                <a href='#'>Men</a>
                            </div>
                        </button>
                    </div>
                   <div className='accordion-collapse collapse' id='accordion-heading-one'>
                      <div className='accordion-body'>
                        <ul>
                            <li className='sub-items'><a href='#'>Coats</a></li>
                            <li className='sub-items'><a href='#'>Boots</a></li>
                            <li className='sub-items'><a href='#'>Partywear</a></li>
                            <li className='sub-items'><a href='#'>Shirts</a></li>
                        </ul>
                    </div>
                 </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SideNav;
