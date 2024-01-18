import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import SingleProduct from "./SingleProduct";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

function ProductDeatils() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [Product, setProduct] = useState({});
  const [RelatedProducts, setRelatedProducts] = useState([]);
  const { allProducts } = useSelector((state) => state.allProducts);
  // console.log(allProducts)

  useEffect(() => {
    const filterProduct = allProducts.filter(
      (item) => Number(item.id) === Number(id)
    );
    setProduct(filterProduct[0]);
    console.log(Product)

    const similar = allProducts.filter((item)=> item.category == Product.category);
    console.log(similar);
    setRelatedProducts(similar);
  }, [id, Product.category]);

  const addToCart = (Product) => {
    dispatch(add(Product));
  };

  
  return (
    <>
      <Navbar />
      <div className="productDeatils flex flex-col lg:grid lg:grid-cols-2 mt-5 justify-center items-center gap-5 m-3">
        <div className="productImages flex flex-col lg:flex-row justify-center items-center gap-5">
          <div className="productImages-big">
            <img
              src={Product.image}
              alt="Product image"
              className="w-[480px] h-[480px] m-4 p-2"
            />
          </div>
          <div className="productImages-small flex flex-row md:flex-row lg:flex-col justify-center items-center">
            <div className="flex flex-col md:flex-row lg:flex-col justify-center items-center">
              <img
                src={Product.image}
                alt="Product image"
                className="w-[120px] h-[120px] m-3"
              />
              <img
                src={Product.image}
                alt="Product image"
                className="w-[120px] h-[120px] m-3"
              />
            </div>
            <div className="flex flex-col md:flex-row lg:flex-col justify-center items-center">
              <img
                src={Product.image}
                alt="Product image"
                className="w-[120px] h-[120px] m-3"
              />
              <img
                src={Product.image}
                alt="Product image"
                className="w-[120px] h-[120px] m-3"
              />
            </div>
          </div>
        </div>
        <div className="productDesc m-5">
          <h1 className="font-bold text-2xl mb-3">{Product.title}</h1>
          <h1 className="text-xl mb-3">{Product.description}</h1>
          <h1 className="text-xl mb-3">INR : {Product.price}</h1>
          <h1 className="text-lg mb-3">Rating - {Product?.rating?.rate}</h1>
          <div>
            <button
              className="p-2 bg-blue-500 rounded mt-5 hover:bg-sky-400 text-white hover:text-black"
              onClick={() => addToCart(Product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <br></br>
      <h1 className="text-3xl font-bold my-14 text-center">Similar Products</h1>
      <div className="relatedProducts grid md:grid-cols-2 lg:grid-cols-4 gap-10 m-5 ">
        {RelatedProducts.map((item)=>
          <SingleProduct key={item.id} item={item} />
        )}
      </div>
    </>
  );
}

export default ProductDeatils;
