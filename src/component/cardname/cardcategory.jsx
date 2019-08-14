import React, {Fragment} from 'react'
import './cardcategory.css'

const Cardcategory = (props) => {
    return (
        <Fragment>
                <div className="cardbtn" onClick={()=>props.goto(props.nama)}><i className="fa fa-meanpath"></i><br/>{ props.nama }</div>
        </Fragment>
    )
}

export default Cardcategory
