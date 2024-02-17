import React from 'react';
import './__products.scss';

function Products() {
    
    const productData = [
        {
            name:"jacket",
            price: 40,
            img:"coats.jpg"
        },
        {
            name:"jacket",
            price: 20, 
            img:"coats.jpg"
        },
        {
            name:"shirts",
            price: 50,
            img:"shirts.avif"
        },
        {
            name:"tshirt",
            price: 10,
            img:"tshirt.avif"
        },
        {
            name:"tshirt",
            price: 10,
            img:"tshirt.avif"
        },
        {
            name:"tshirt",
            price: 10,
            img:"tshirt.avif"
        },
    ];

  return (
    <div className='products-container'>
    {
        productData.map((product,key)=>{
            return(
            <div className='mx-5 p-3 col-lg-3 col-md-6 product-card'>
                <div className='product-image-container'>
                    <img src={require(`../../assets/images/${product.img}`)}/>
                </div>
                <div className='product-info'>
                    <h5><a href='#'>{product.name}</a></h5>
                    <p className='product-price'>$ {product.price}</p>
                    <div className='product-rating'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
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
