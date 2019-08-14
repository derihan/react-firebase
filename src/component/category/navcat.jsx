import React from "react";
// import { Link } from "react-router-dom"

const Navcat = (props) => {

  return (
    <React.Fragment>
        <span onClick={()=>props.changeKat(props.id)} > { props.cat } </span>
    </React.Fragment>
  );
};

export default Navcat;
