import React, {useEffect, useState} from "react";
import Slider from "../components/Slider/Slider";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import ProductItemDetail from "../components/Products/ProductItemDetail";
import { Route, Switch, withRouter } from "react-router-dom";
import { getCategoriesReq, getProductsReq } from "../api";
import Cart from "../components/Cart/Cart";

const MainPage = (props) => {
  const [products, setProducts] = useState([]);
  const [reRenderProducts, setReRenderProducts] = useState(false);
  const [categories, setCategories] = useState([]);
  const getProducts = async () => {
    const { data } = await getProductsReq();
    setProducts(data);
  };
  const getCategories = async () => {
    const { data } = await getCategoriesReq();
    setCategories(data);
  };
  useEffect(() => {
    getCategories();
    if (props.location.pathname === "/favorite")
      setProducts(JSON.parse(localStorage.getItem("fav")));
    else {
      getProducts();
    }
  }, []);
  useEffect(() => {
    if (props.location.pathname === "/favorite")
      setProducts(JSON.parse(localStorage.getItem("fav")));
  }, [props.location.pathname, reRenderProducts]);


  return (
    <div>
      <Slider />
      <div className="main-content">
        <Categories categories={categories} />
        <Switch>
          <Route path={"/"} exact>
            <div className={"products-feed"}>
              <Products doReRender={setReRenderProducts} setProducts={setProducts} products={products} title={"Popular Items"} />
              <Products doReRender={setReRenderProducts} setProducts={setProducts} products={products} title={"Favorite"} />
            </div>
          </Route>
          <Route path={"/category/:categoryId"} exact>
            <Products
              doReRender={setReRenderProducts}
              setProducts={setProducts}
              products={products}
              title={"Category products"}
            />
          </Route>
          <Route path={"/product/:number"} exact>
            <ProductItemDetail products={products} />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/favorite" exact>
            <Products
              setProducts={setProducts}
              doReRender={setReRenderProducts}
              products={products}
              title={"Favourite"}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(MainPage);
