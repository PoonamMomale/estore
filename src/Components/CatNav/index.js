import React, { useEffect } from 'react';
import './__cat-nav.scss';
import { useDispatch, useSelector } from 'react-redux';
import categorySlice from '../../Redux/slices/categorySlice/categorySlice';
import { getCategories } from '../../Redux/slices/categorySlice/actions';
import { Link } from 'react-router-dom';

function CatNav() {

  const categories = useSelector(state => state.categoryReducer.categories);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCategories());
  },[])
  //  console.log(categories)

  const filterData = (selectedCategory) =>{
    // console.log(selectedCategory)
  }

  return (
    <>
        <div className='catnav-container container'>
            <ul>
            <li className='list-items'>
                <Link to='/'>Home</Link>
            </li>
              {
                categories.map((cat,key)=>{
                  if(cat.parent_category_id === null){
                    return(
                    <li className='list-items'><a href='#' onClick={()=>filterData(cat.category)}>{cat.category}</a></li>
                  )
                  }
                })
              }
            </ul>
        </div>
    </>
  )
}

export default CatNav;
