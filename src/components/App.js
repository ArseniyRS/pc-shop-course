import Navbar from "./Navbar/Navbar";
import React from "react";
import '../styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "./Slider/Slider";
import Categories from "./Categories/Categories";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Slider />
            <Categories />
        </div>
    );
}

export default App;
