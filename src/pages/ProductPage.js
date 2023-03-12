import React from "react";
import {Link, useParams} from "react-router-dom";
import Product from "../components/Product"

const ProductPage = () => {
   let {id} = useParams();

   return (
      <>
         <div>Product page</div>
         <Product id={id}/>
         <Link to={"/products"}>Return to products list</Link>
      </>
   );
}

export default ProductPage;