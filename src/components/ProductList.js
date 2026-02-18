import React from 'react';
import { Link } from 'react-router-dom';

const ProductList=(data)=>{
    const {products}=data;
    return(
        <>
           <div className="product-div">
        {products.map((product)=>
          <div className="items" key={product.id}>
            <img src={product.image} alt='image' width='90px' height='100%'/>
            <div className="title">
               <p><b>{product.name}</b></p>
               <p>Rs.{product.price}/-</p>
            </div>
            <Link to={`/products/${product.id}`}>
                <button>
                Buy
                </button>
            </Link>
           
          </div>        
        )}
       </div>
        </>
    );
}

export default ProductList;