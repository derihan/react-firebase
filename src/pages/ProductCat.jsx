import React, { Component } from 'react'

export default class ProductCat extends Component {

    render() {
        return (
            <div>
                {
                    this.props.match.params.kategori
                }
            </div>
        )
    }
}
