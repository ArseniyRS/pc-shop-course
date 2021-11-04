import React, {useEffect, useState} from 'react';
import {withRouter} from "react-router-dom";

const CategoriesItem = ({id, name, ...props}) => {
    const [active, setActive] = useState(false)
    useEffect(() => {
        if (props.location.pathname.endsWith(name.toLowerCase()))
            setActive(true)
        else
            setActive(false)
    }, [props.location.pathname])
    return (
        <div className={`categories__item ${active ? 'categories__item_active' : ''}`}
             onClick={() => props.history.push(`/${name.toLowerCase()}`)}>
            {name}
        </div>
    );
};

export default withRouter(CategoriesItem);

