import Navbar from "./Navbar/Navbar";
import React from "react";
import '../styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "./Slider/Slider";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";
import ProductItemDetail from "./Products/ProductItemDetail";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Slider/>
            <div className="main-content">
                <Categories/>
                <ProductItemDetail />
                {/*<div className={'products-feed'}>*/}
                {/*    <Products title={'Popular Items'}/>*/}
                {/*    <Products title={'Favorite'}/>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default App;
