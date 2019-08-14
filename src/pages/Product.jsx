import React, { Component } from 'react'
import { connect } from 'react-redux';
import './katnav.css'
import ProductCard from '../component/product/ProductCard';
import Navcat from '../component/category/navcat';
import ProductCount from '../component/product/ProductCount';

export class Product extends Component {

    state = {
        iskategori : "0"
    }

    getKat = () => {
        const product = this.props.allProduct
        const condition = this.state.iskategori
        if (condition == "0") {
           return (
            product.map((item)=>{
                return(
                    <ProductCard data={item} key={item.id}/>
                )
            })
           )
          
        } else {
            // console.log(condition);
             return (
                product.filter((data)=> data.kategori == condition)
                    .map((item)=>{
                        return(
                            <ProductCard data={item} key={item.id} />
                        )
                    })
             )
        }
    }

    handleKat = (id) =>{
        console.log(id);
        this.setState({  iskategori:id })
    }

    render() {
        // var katid = this.state.iskategori
        // // const katCount ;
        // if (katid != "0") {
        //    const katCount = <ProductCount count={this.props.allProduct.length}/>
        // }

        return (
            <div>
                <div className="navcat-wrapper"> 
                <Navcat cat="all" changeKat={this.handleKat} id="0" key={0} />
                {
                     this.props.kategori.map((item)=>{
                         return(
                            <Navcat cat={item.nama} id={item.id} changeKat={this.handleKat} key={item.id} />        
                         )
                     })
                 }   
                </div>
                <br/>
                <ProductCount count={this.props.allProduct.length}/>
                {
                    this.getKat()
                }
                </div>
        )
    }
}

const matStateToProps = (state) => {
    return{
        // productLength : state.product.length,
        allProduct : state.product,
        kategori : state.kategori,
        // detail : state.productDetail
    }
}

export default connect(matStateToProps)(Product);
// export default Product;;
