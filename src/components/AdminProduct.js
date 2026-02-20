import React, { useRef ,useState} from 'react';
import { useParams,useHistory } from 'react-router-dom';

const AdminProduct=({products,setProducts})=>{
    const history=useHistory();
    const {id}=useParams();
    const product=products.find(pro=>pro.id==id);
    
    const [name,setName]=useState(product.name);
    const [desc,setDesc]=useState(product.desc);
    const [image,setImage]=useState(product.image);
    const [price,setPrice]=useState(product.price);

    const handleDelete=(val)=>{
        let newArray=products.filter((prod)=>prod.id!=val);
        setProducts(newArray);
        history.push('/');

    }

    const handleSave=(val)=>{
        let newArray=products.filter((prod)=>prod.id!=val);
        setProducts([...newArray,{
            id:val,
            image:image,
            name:name,
            desc:desc,
            price:price
        }]);
        console.log(products);
        history.push('/');

    }

    return(
        <>
            <div className='form'>
                <form>
                    <label htmlFor='title'>Title</label><br></br>
                    <input type='text'id='title' placeholder='title..' value={name} onChange={(e)=>setName(e.target.value)} /><br></br>
                    <label htmlFor='desc'>Description</label><br></br>
                    <textarea rows='3' cols='20' id='desc' value={desc} placeholder='Description...' onChange={(e)=>setDesc(e.target.value)} ></textarea><br></br>
                     <label htmlFor='image'>Image</label><br></br>
                    <input type='url'id='image' placeholder='image url..' value={image} onChange={(e)=>setImage(e.target.value)} /><br></br>
                     <label htmlFor='price'>Price</label><br></br>
                    <input type='text'id='price' placeholder='Product Price..' value={price} onChange={(e)=>setPrice(e.target.value)} /><br></br>
                    
                </form>
                <button onClick={()=>handleDelete(product.id)}>Delete</button>
                <button onClick={()=>handleSave(product.id)}>Save</button>
            </div>
        </>
    );
}
export default AdminProduct;