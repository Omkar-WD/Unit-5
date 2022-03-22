import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const ProductsDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    let a;
    axios.get(`http://localhost:3001/products`).then((res) => {
      if (+id >= 0 && +id < res.data.length)
        axios.get(`http://localhost:3001/products/${id}`).then((res) => {
          setProduct(res.data);
        });
    });
  }, []);

  return (
    <>
      {Object.keys(product).length !== 0 ? (
        <div
          style={{
            display: "flex",
            paddingTop: "50px",
            justifyContent: "center",
            textAlign: "left",
          }}
        >
          <div className="productImage">
            <img src={product.image} alt="product image" />
          </div>
          <div className="productDetails" style={{ padding: "20px" }}>
            <div>
              <h2 className="productName">{product.name}</h2>
              <h5 className="productCategory">Category : {product.category}</h5>
              <h5 className="productPrice">Price : {product.price}</h5>
            </div>
            <h5>Specifications :</h5>
            <div style={{ width: "700px", paddingLeft: "30px" }}>
              <h5 className="productDesc">Description :</h5>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      ) : (
        "Product does not exist"
      )}
    </>
  );
};
