import React from 'react';
import '../../styles/slider.scss'
import {Button} from "react-bootstrap";


const Slider = () => {
    return (
        <div className={'slider'}>
            <div className="slider-info">
                <h1 className={'slider__title'}>The Best Place for People</h1>
                <Button className={'slider__btn'} variant="success">Get started</Button>
            </div>
        </div>
    );
};

export default Slider;