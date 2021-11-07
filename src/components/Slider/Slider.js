import React, { useEffect, useState } from 'react';
import '../../styles/slider.scss'
import { Button } from "react-bootstrap";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { Link, withRouter } from "react-router-dom";
import { getRouteItems } from "../../utils/getRouteItems";
import Carousel from 'react-bootstrap/Carousel'

const Slider = (props) => {
    const [slides, setSlides] = useState([
        {
            title: 'The Best Place for People',
            img: 'https://www.rollingstone.com/wp-content/uploads/2021/01/AdobeStock_274383137.jpeg'
        },
        {
            title: 'The Best Place for People',
            img: 'https://besthqwallpapers.com/Uploads/21-10-2019/109074/thumb2-workplace-apple-imac-monitor-smartphone-stylish-interior-of-the-office.jpg'
        },
        {
            title: 'The Best Place for People',
            img: 'https://thefunnybeavercomd030b.zapwp.com/q:intelligent/retina:true/webp:true/w:412/url:https://thefunnybeaver.com/wp-content/uploads/2017/04/Ultimate-PC-Gaming-Room-Build-featured.jpg'
        },
        {
            title: 'The Best Place for People',
            img: ''
        },
        {
            title: 'The Best Place for Cats',
            img: ''
        }
    ])
    const [isSlider, setIsSlider] = useState(true)
    const [title, setTitle] = useState('')
    useEffect(() => {
        const routes = getRouteItems(props.location.pathname)
        if (routes.length) {
            setTitle(routes[routes.length - 1])
            setIsSlider(false)
        }
        else
            setIsSlider(true)
    }, [props.location.pathname])
    return (
        <>
            <div className="slider-btn-container">
                <Link to={'/favorite'} className={'slider-btn'}><i className="fas fa-heart" /></Link>
                <Link to={'/cart'} className={'slider-btn'}><i className="fas fa-shopping-cart" /></Link>
            </div>
            {isSlider ?
                <Carousel controls={false} interval={3000} slide={true} touch={true}>
                    {slides.map(slide => (
                        <Carousel.Item className={'slider'} style={{ background: `${slide.img ? `url(${slide.img})` : 'gray'}` }}>
                            <Carousel.Caption className={'slider-info'}>
                                <h1 className={'slider__title'}>{slide.title}</h1>
                                <Button className={'slider__btn'} variant="success">Get started</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
                :
                <div className={'slider'} style={{ height: '55vh' }}>
                    <div className="slider-info">
                        <h1 className={'slider__title'}>{title.toUpperCase()}</h1>
                        <Breadcrumbs />
                    </div>
                </div>
            }
        </>
    );
};

export default withRouter(Slider);