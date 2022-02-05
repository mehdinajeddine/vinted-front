import React from "react";
import { Link } from "react-router-dom";

const Card = ({ thumbnail, account, pid }) => {
  const link = "product/" + pid;
  return (
    <div>
      <Link to={link}>
        <div>{account.username}</div>
        <div className="offer-thumbnail">
          <img src={thumbnail} alt="Big" />
        </div>
      </Link>
    </div>
  );
};

export default Card;
