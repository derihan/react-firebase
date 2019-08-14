import React, { Component } from 'react'
import Cardballance from '../component/cardname/cardbalance';
import Cardcategory from '../component/cardname/cardcategory';
import Cardorder from '../component/cardname/cardorder';
import { connect } from 'react-redux';

class Home extends Component {

    whereYouGo = (goto) =>{
         return this.props.history.push(`/product/${goto}`)
    }

    render() {
        return (
            <div>
                <Cardballance/>
                <div className="cardCategory">
                <p>Product category</p>
                <div className="catName">
                {
                    this.props.kategori.map((item)=> {
                        return(
                            <Cardcategory key={item.id} nama={item.nama} goto={this.whereYouGo}/>
                        )
                    })
                }
                </div>
                </div>
                <Cardorder/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        product: state.product,
        kategori: state.kategori
    }
}

export default connect(mapStateToProps)(Home);