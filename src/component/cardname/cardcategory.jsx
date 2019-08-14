import React, {Fragment} from 'react'
import './cardcategory.css'
import { NavLink } from 'react-router-dom'

const Cardcategory = (props) => {
    return (
        <Fragment>
                <NavLink to={'/product/'+props.nama} className="cardbtn" onClick={()=>props.goto(props.nama)}><i className="fa fa-meanpath"></i><br/>{ props.nama }</NavLink>
        </Fragment>
        // <Navlink 
    )
}

export default Cardcategory
