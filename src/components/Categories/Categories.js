import React, {useState} from 'react';
import CategoriesItem from "./CategoriesItem";
import '../../styles/categories.scss'


const Categories = () => {
    const [categories, setCategories] = useState([
        {id: 1, name: 'Monitors'},
        {id: 2, name: 'Keyboard'},
        {id: 3, name: 'CPU'},
        {id: 4, name: 'GPU'},
        {id: 5, name: 'RAM'},
        {id: 6, name: 'HDD/SSD'},
    ])

    return (
        <div className={'categories'}>
            <h5 className={'categories__title'}>Categories</h5>
            {categories.map(category => <CategoriesItem key={category.id} {...category}/>)}
        </div>
    );
};

export default Categories;