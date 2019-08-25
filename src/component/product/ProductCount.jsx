import React from 'react'

const ProductCount = (props) => {
    return (
        <React.Fragment>
            <p className="ml-8">All Product <span className="badge">{ props.pcount }</span> </p>
        </React.Fragment>
    )
}

export default ProductCount
