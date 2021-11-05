import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8000/',
});


export const getProductsReq = () => instance.get('products')
export const getCategoriesReq = () => instance.get('categories')
export const getProductsByCategoryReq = (categoryId) => instance.get(`products?categoryId=${categoryId}`)