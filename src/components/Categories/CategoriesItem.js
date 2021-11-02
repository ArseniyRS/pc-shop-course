import React from 'react';

const CategoriesItem = ({id,name}) => {
    return (
        <div className={'categories__item'}>
            {name}
        </div>
    );
};

export default CategoriesItem;

