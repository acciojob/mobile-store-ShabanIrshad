import React from 'react';
import { useParams,Link } from 'react-router-dom';

const ProductDetails=({products})=>{
    const {id}=useParams();
    // console.log(products);
    const product=products.find((pro)=>pro.id==id)
    console.log(product);
    return(
        <>
            <div className='product-container'>
                <img src={product.image} alt='image' width='40%' height='100%'/>
                <div>
                    <h2>{product.name}</h2>
                    <h3>Desc:</h3>
                    <p className='desc'>{product.desc}</p>
                    <b><p>Price:{product.price}</p></b>
                    <Link to='/'><button>Other Products</button></Link>
                    
                </div>
                
            </div>
        </>
    );
}

export default ProductDetails;