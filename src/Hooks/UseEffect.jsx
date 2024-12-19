import React, { useEffect, useState } from "react";
import axios from "axios";
import { Api } from "../../utils/Constants";
const UseEffect = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(Api);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { products } = data;
  console.log(products);
  return (
    <>
      {products &&
        products.map((product) => (
          <div key={product.id}>
            <span>{product.id}</span>
            <span>{product.title}</span>
          </div>
        ))}
    </>
  );
};

export default UseEffect;
