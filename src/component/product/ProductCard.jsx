import React, { useState } from "react";

const ProductCard = props => {
  const [productCard] = useState(props.data);
  const katId = props.isKategori
  // console.log(props.data.length);
  return (
    <React.Fragment>
      { katId === null ? (
        productCard.map((item)=>{
          return(
            <div
              onClick={() => props.detail(item.id)}
              className="product-list"
              key={item.id}
            >
              <div className="img-wrapper">
                <i className="fa fa-dropbox" />
              </div>
              <div className="pd-2 wd-f">
                <h5 className="tx-title">{item.nama}</h5>
                <h6 className="tx-3">Rp. {item.harga}</h6>
              </div>
              <span className="add-tocart">
                <i className="fa fa-lastfm-square fa-2x tx-w" />
              </span>
            </div>
          )
        })
      ) : (
        productCard.filter(item => item.kategori === katId)
        .map(item => {
          // console.log(item)
          return (
           
            <div
              onClick={() => props.detail(item.id)}
              className="product-list"
              key={item.id}
            >
              <div className="img-wrapper">
                <i className="fa fa-dropbox" />
              </div>
              <div className="pd-2 wd-f">
                <h5 className="tx-title">{item.nama}</h5>
                <h6 className="tx-3">Rp. {item.harga}</h6>
              </div>
              <span className="add-tocart">
                <i className="fa fa-lastfm-square fa-2x tx-w" />
              </span>
            </div>
          );
        })
      )}
    </React.Fragment>
  );
};
export default ProductCard;
