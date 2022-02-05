import { React, useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Offers = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const getProducts = async () => {
    const res = await axios.get(
      "https://lereacteur-vinted-api.herokuapp.com/offers"
    );
    console.log(res.data);
    setData(res.data.offers);
    setIsLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return isLoading ? (
    <div>is Loading...</div>
  ) : (
    <div className="offers">
      {data.map((item, index) => {
        return (
          <Card
            key={index}
            thumbnail={item.product_image.secure_url}
            account={item.owner.account}
            pid={item._id}
          ></Card>
        );
      })}
    </div>
  );
};

export default Offers;
