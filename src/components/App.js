
import React, { useState } from "react";
import './../styles/App.css';
import { BrowserRouter,Switch,Route,Link } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";
import AdminProduct from "./AdminProduct";

const App = () => {
  const ProductArray=[
    {
      id:1,
      image:'https://m.media-amazon.com/images/I/416G5NDlq+L._SL500_.jpg',
      name:'Motorolla G85',
      desc:'at Object.parseStatement (C:\AccioJob\React\mobile-store-ShabanIrshad\node_modules\babel\parser\lib\index.js:11431:17)atparseBlockOrModuleBlockBody C:\AccioJob\React\mobile-store-ShabanIrshad\node_modules\babel',
      price:1499
    },
     {
      id:2,
      image:'https://horizonstore.com.au/cdn/shop/files/3_8250a819-3cbc-428d-ac34-7fc06aae800f_600x.jpg?v=1762480174',
      name:'Samsung 85',
      desc:'at Object.parseStatement (C:\AccioJob\React\mobile-store-ShabanIrshad\node_modules\babel\parser\lib\index.js:11431:17)atparseBlockOrModuleBlockBody C:\AccioJob\React\mobile-store-ShabanIrshad\node_modules\babel',
      price:1499
    },
     {
      id:3,
      image:'https://m.media-amazon.com/images/I/416G5NDlq+L._SL500_.jpg',
      name:'Redmi G85',
      desc:'at Object.parseStatement (C:\AccioJob\React\mobile-store-ShabanIrshad\node_modules\babel\parser\lib\index.js:11431:17)atparseBlockOrModuleBlockBody C:\AccioJob\React\mobile-store-ShabanIrshad\node_modules\babel',
      price:1499
    },
     {
      id:4,
      image:'https://m.media-amazon.com/images/I/416G5NDlq+L._SL500_.jpg',
      name:'Xiomi G85',
      desc:'at Object.parseStatement (C:\AccioJob\React\mobile-store-ShabanIrshad\node_modules\babel\parser\lib\index.js:11431:17)atparseBlockOrModuleBlockBody C:\AccioJob\React\mobile-store-ShabanIrshad\node_modules\babel',
      price:1499
    },
     {
      id:5,
      image:'https://m.media-amazon.com/images/I/416G5NDlq+L._SL500_.jpg',
      name:'Lava G85',
      desc:'at Object.parseStatement (C:\AccioJob\React\mobile-store-ShabanIrshad\node_modules\babel\parser\lib\index.js:11431:17)atparseBlockOrModuleBlockBody C:\AccioJob\React\mobile-store-ShabanIrshad\node_modules\babel',
      price:1499
    },
     {
      id:6,
      image:'https://m.media-amazon.com/images/I/416G5NDlq+L._SL500_.jpg',
      name:'Carboun G85',
      desc:'at Object.parseStatement (C:\AccioJob\React\mobile-store-ShabanIrshad\node_modules\babel\parser\lib\index.js:11431:17)atparseBlockOrModuleBlockBody C:\AccioJob\React\mobile-store-ShabanIrshad\node_modules\babel',
      price:1499
    },
     {
      id:7,
      image:'https://m.media-amazon.com/images/I/416G5NDlq+L._SL500_.jpg',
      name:'Motorolla G89',
      desc:'at Object.parseStatement (C:\AccioJob\React\mobile-store-ShabanIrshad\node_modules\babel\parser\lib\index.js:11431:17)atparseBlockOrModuleBlockBody C:\AccioJob\React\mobile-store-ShabanIrshad\node_modules\babel',
      price:1499
    },
     {
      id:8,
      image:'https://m.media-amazon.com/images/I/416G5NDlq+L._SL500_.jpg',
      name:'Motorolla Gone',
      desc:'at Object.parseStatement (C:\AccioJob\React\mobile-store-ShabanIrshad\node_modules\babel\parser\lib\index.js:11431:17)atparseBlockOrModuleBlockBody C:\AccioJob\React\mobile-store-ShabanIrshad\node_modules\babel',
      price:1499
    },
  ];

  const [products,setProducts]=useState(ProductArray);
  return (
    <BrowserRouter>
      <div className="navbar">
          <p><Link to='/' className='link'>Home</Link></p>
          <p><Link to='/admin' className='link'>Admin</Link></p>          
      </div>
      <Switch>
        <Route exact path='/'>
        <ProductList products={products}/>
        </Route>
        <Route path='/products/:id'>
        <ProductDetails products={products}/>
        </Route>
        <Route path='/admin/products/:id'>
        <AdminProduct products={products} setProducts={setProducts}/>
        </Route>
        <Route path='/admin/add'>
        <AdminProduct products={[]} setProducts={setProducts}/>
        </Route>
        <Route path='/admin'>
        <AdminPanel products={products}/>
        </Route>
        
      </Switch>
      

    </BrowserRouter>
  )
}

export default App
