import React, {useEffect, useState} from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import {Link, withRouter} from "react-router-dom";
import {getRouteItems} from "../../utils/getRouteItems";

const Breadcrumbs = (props) => {
    const [routeItems, setRouteItems] = useState([])
    useEffect(() => {
        setRouteItems(getRouteItems(props.location.pathname))
    }, [props.location.pathname])
    return (
        <Breadcrumb>
            {Boolean(routeItems.length) && <Breadcrumb.Item href={'#'} className={'breadcrumb'}><Link to={'/'}>home</Link></Breadcrumb.Item>}
            {routeItems.map((route, index) => (
                    <Breadcrumb.Item
                        href={'#'}
                        className={'breadcrumb'}
                        key={index} active={index === routeItems.length - 1}>
                        {(index === routeItems.length - 1) ?
                            <span>{route}</span> :
                            <Link to={`/${route}`}>{route || 'home'}</Link>
                        }
                    </Breadcrumb.Item>))
            }
        </Breadcrumb>
    );
};

export default withRouter(Breadcrumbs);