import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Offer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProductData = async () => {
      const endpoint =
        "https://lereacteur-vinted-api.herokuapp.com/offer/" + id;
      const res = await axios.get(endpoint);
      setProduct(res.data);
      setIsLoading(false);
    };
    getProductData();
  }, []);

  return isLoading ? (
    <div>is Loading ....</div>
  ) : (
    <div className="flex container mx-auto px-4">
      <div className="big-pic mr-10">
        <img src={product.product_image.secure_url} alt="" />
      </div>
      <div className="bg-white p-5">
        <div>{product.product_price} €</div>
        <div className="mb-20">
          {product.product_details.map((item, index) => {
            for (const [key, value] of Object.entries(item)) {
              return (
                <div className="flex">
                  <div>{key}</div>
                  <div>{value}</div>
                </div>
              );
            }
          })}
        </div>
        <hr />
        <div className="mt-10 font-bold">{product.product_name}</div>
        <div>{product.product_description}</div>
        <button className="bg-cyan-500 text-white px-10">Acheter</button>
      </div>
    </div>
  );
};

export default Offer;
