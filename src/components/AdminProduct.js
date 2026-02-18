import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const AdminProduct=({products})=>{
    const {id}=useParams();
    return(
        <>
            <div className='form'>
                <form>
                    <label htmlFor='title'>Title</label><br></br>
                    <input type='text'id='title' placeholder='title..'/><br></br>
                    <label htmlFor='desc'>Description</label><br></br>
                    <textarea rows='3' cols='20' id='desc' placeholder='Description...'></textarea><br></br>
                     <label htmlFor='image'>Image</label><br></br>
                    <input type='url'id='image' placeholder='image url..'/><br></br>
                     <label htmlFor='price'>Price</label><br></br>
                    <input type='text'id='price' placeholder='Product Price..'/><br></br>
                    
                </form>
                <button>Delete</button>
                <button>Save</button>
            </div>
        </>
    );
}
export default AdminProduct;