import React, { Component } from 'react'
import { connect } from 'react-redux';
import './katnav.css'
import ProductCard from '../component/product/ProductCard';
import Navcat from '../component/category/navcat';
import ProductCount from '../component/product/ProductCount';

export class Product extends Component {

    state = {
        iskategori : null,
        pLength: this.props.allProduct.length
    }

    detailPage = (id) =>{
        this.props.history.push(`/productdetail/${id}`)
    }

    handleKat = (id) =>{
        var datacount
        id === null ? datacount =this.props.allProduct : datacount = this.props.allProduct.filter((item)=> item.kategori === id ) 
        // const datacount = 
        this.setState({  
            iskategori:id,
            pLength: datacount.length
        })
    }

    render() {
        return (
            <div>
                <Navcat handleCat={this.handleKat} data={this.props.kategori} />
                <br/>
                <ProductCount pcount={this.state.pLength} />
                <ProductCard data={this.props.allProduct} detail={(e)=>this.detailPage(e)} isKategori={this.state.iskategori}/>
            </div>
        )
    }
}

const matStateToProps = (state) => {
    return{
        allProduct : state.product,
        kategori : state.kategori,
    }
}

export default connect(matStateToProps)(Product);

