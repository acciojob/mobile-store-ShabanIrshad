import React from 'react';
import { Link } from 'react-router-dom';

const AdminPanel=({products})=>{
    return(
        <>
            <div className='admin-container'>
                <button>Add Product</button>
                <ul>
                    {products.map(prod=>
                    <li>
                        <Link to={`/admin/products/${prod.id}`}>
                            <div className='admin-item'>
                                <img  src={prod.image} alt='image' width='10%' height='100%'/>
                                <p>{prod.name}</p>
                            </div>
                        </Link>
                    </li>
                    )}
                   
                </ul>
            </div>
        </>
    );
}

export default AdminPanel;