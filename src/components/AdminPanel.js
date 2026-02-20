import React from 'react';
import { Link } from 'react-router-dom';
import AdminProduct from './AdminProduct';

const AdminPanel=({products})=>{
   
    return(
        <>
            <div className='admin-container'>
                <Link to='/admin/add'><button>Add Product</button></Link>
                <ul>
                    {products.map((prod,index)=>
                    <li key={index}>
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