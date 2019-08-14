import React, { Component,Fragment } from 'react'
import ProductCard from '../product/ProductCard';
import Navcat from '../category/navcat';
import ProductCount from '../product/ProductCount'
import { connect } from 'react-redux'

 class Allproduct extends Component {
    render() {
        return (
           <Fragment>
               <div className="navcat-wrapper">
                 {
                     this.props.kategori.map((item)=>{
                         return(
                            <Navcat cat={item}  key={item.id} />        
                         )
                     })
                 }   
                </div>
                <br/>
                <ProductCount count={this.props.allProduct.length}/>
                {
                    this.props.allProduct.map((item)=>{
                        return(
                            <ProductCard data={item} key={item.id}/>
                        )
                    })
                }
           </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        allProduct : state.product,
        kategori : state.kategori,
    }
}

export default connect(mapStateToProps)(Allproduct)