import React, {Fragment} from 'react'
import './cardorder.css'

const Cardorder = () => {
    return (
        <Fragment>
            <div className="cardOrder">
                <p>My Order</p>
            </div>
            <div className="groupOrder">
                <div className="ordbtn">My order</div>
                <div className="ordbtn">Last buy</div>
            </div>
        </Fragment>
        
    )
}

export default Cardorder
