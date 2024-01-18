import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { useSelector,useDispatch } from "react-redux";
import { getProducts } from "../store/productSlice";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";


function Products() {
  // const [products, setProducts] = useState([]);

  const {allProducts:products, status} = useSelector((state) => state.allProducts);
  const dispatch = useDispatch()

  useEffect(() => {
    //get products from API using fetch method
    // fetch('https://fakestoreapi.com/products')
    //   .then((response) => response.json())
    //   .then((data) => setProducts(data));
    dispatch(getProducts());

  },[]);

  if(status === 'loading'){
    return <LoadingPage/>
  }

  if(status === 'error'){
    return <ErrorPage/>
  }

  return (
    <>
    {/* {JSON.stringify(products)} */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 m-5">
        {products.map((item) => 
          <SingleProduct key={item.id} item={item} />
        )}
      </div>
    </>
  );
}

export default Products;
