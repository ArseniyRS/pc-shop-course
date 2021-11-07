import Navbar from "./Navbar/Navbar";
import React, {useEffect, useState} from "react";
import '../styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "./Slider/Slider";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";
import ProductItemDetail from "./Products/ProductItemDetail";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import {Route, Switch} from "react-router-dom";
import {getCategoriesReq, getProductsReq} from "../api";
import Cart from "./Cart/Cart";

function App() {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const getProducts = async () =>{
        const {data} = await getProductsReq()
        setProducts(data)
    }
    const getCategories = async () =>{
        const {data} = await getCategoriesReq()
        setCategories(data)
    }
    useEffect(()=>{
        getCategories()
        getProducts()
    },[])
    return (
        <div className="App">
            <Navbar/>
            <Slider/>
            <div className="main-content">
                <Categories categories={categories}/>
                <Switch>
                    <Route path={'/'} exact>
                        <div className={'products-feed'}>
                            <Products products={products} title={'Popular Items'}/>
                            <Products products={products} title={'Favorite'}/>
                        </div>
                    </Route>
                    <Route path={'/category/:categoryId'} exact>
                        <Products setProducts={setProducts} products={products} title={'Category products'}/>
                    </Route>
                    <Route path={'/product/:number'} exact>
                        <ProductItemDetail products={products}/>
                    </Route>
                    <Route path="/cart" exact>
                        <Cart />
                    </Route>
                    <Route path="/favorite" exact>
                        
                    </Route>
                </Switch>

            </div>
        </div>
    );
}

export default App;
