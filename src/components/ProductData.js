import React, { useEffect, useRef, useState } from "react";
import Pagenation from "./Pagenation";

const ProductData = () => {
  const [data, SetData] = useState([]);
  const [perPage, setPerPage] = useState([]);
  const [page, setpage] = useState(1);
  const formdiv = useRef(null);

  const getProducts = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.products);
        SetData(data.products);
        setPerPage(data.products.slice(0, 10));
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const pageHandler = (page) => {
    setpage(page);
    setPerPage(data.slice(page * 10 - 10, page * 10));
    if (formdiv.current) {
      formdiv.current.scrollIntoView({ behaviour: "smooth" });
    }
  };
  return (
    <div className="container my-3" ref={formdiv}>
      <div className="row">
        {perPage ? (
          perPage.map((product, index) => {
            return (
              <div className="col-lg-3 col-md-4 prod mb-2" key={index}>
                <div className="card">
                  <div className="img">
                    <img
                      src={product.images[0]}
                      className="card-img-top image-fluid"
                      alt="No Image"
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">
                      {product.title?.slice(0, 25)}
                    </h5>
                    <p className="card-text">
                      {product.description?.slice(0, 30)}
                    </p>
                    <p>Price : ${product.price}</p>
                    <p>Rating : {product.rating}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h1>Loading</h1>
        )}
      </div>
      <div className="mainPage">
        <b>Page No-{page}</b>
      </div>
      <br />
      <Pagenation data={data} pageHandler={pageHandler} />
    </div>
  );
};

export default ProductData;

{
  /* <p key={index}>{product.id}</p>; */
}
