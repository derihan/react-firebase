import React, { Component } from 'react'
import { connect } from 'react-redux';
import './katnav.css'
import ProductCard from '../component/product/ProductCard';
import Navcat from '../component/category/navcat';

export class Product extends Component {

    // combineProductDetail = () =>{
    //     const product = this.props.allProduct
    //     const detail = this.props.detail
    //     const arrnew = product.map((item)=>{
    //         return{
    //         id: item.id,
    //         nama: item.nama,
    //         harga: item.harga,
    //         detail: 
    //     }}
    //     )
    //     console.log(arrnew);
    // }

    componentDidMount(){
        console.log(this.props);  
        // this.combineProductDetail(); 
    }

    render() {
        return (
            <div>
                <div className="navcat-wrapper">
                 {
                     this.props.kategori.map((item)=>{
                         return(
                            <Navcat cat={item.nama} key={item.id}/>        
                         )
                     })
                 }   
                </div>
                <br/>
                <p className="ml-8">All Product <span className="badge">20</span> </p>
                {
                    this.props.allProduct.map((item)=>{
                        return(
                            <ProductCard key={item.id} data={item}/>
                        )
                    })
                }
            </div>
        )
    }
}

const matStateToProps = (state) => {
    return{
        allProduct : state.product,
        kategori : state.kategori,
        detail : state.productDetail
    }
}

export default connect(matStateToProps)(Product);
// export default Product;;
