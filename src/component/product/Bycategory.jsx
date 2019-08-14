import React from "react";

const ProductCard = (props) => {
  return (
    <div className="product-list">
      <div className="img-wrapper">
        <i className="fa fa-dropbox" />
      </div>
      <div className="pd-2 wd-f">
        <h5 className="tx-title">{ props.data.nama }</h5>
        <h6 className="tx-3">Rp. { props.data.harga } </h6>
      </div>
      <span className="add-tocart">
        <i className="fa fa-lastfm-square fa-2x tx-w" />
      </span>
    </div>
  );
};

export default ProductCard;
