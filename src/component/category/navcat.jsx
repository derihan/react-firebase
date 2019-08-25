import React,{ useState } from "react";
// import { Link } from "react-router-dom"

const Navcat = (props) => {
  const [navCat] = useState(props.data)
  // console.log(props.data);
  return (
    <React.Fragment>
       <div className="navcat-wrapper">
       <span onClick={()=>props.handleCat(null)}> All </span> 
       {
         navCat.map((item)=>{
           return(
            <span key={item.id} onClick={()=>props.handleCat(item.id)}> { item.nama }  </span>
           )
         })
       }
       </div>
    </React.Fragment>
  );
};

export default Navcat;
