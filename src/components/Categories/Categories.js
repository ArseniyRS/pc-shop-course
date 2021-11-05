import React, {useState} from 'react';
import CategoriesItem from "./CategoriesItem";
import '../../styles/categories.scss'


const Categories = ({categories}) => {

    return (
        <div className={'categories'}>
            <h5 className={'categories__title'}>Categories</h5>
            {categories.map(category => <CategoriesItem key={category.id} {...category}/>)}
        </div>
    );
};

export default Categories;