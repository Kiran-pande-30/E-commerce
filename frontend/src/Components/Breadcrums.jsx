import React from 'react'
import '../style/Breadcrums.css'
import arrow_icon from '../Assets/Frontend_Assets/breadcrum_arrow.png'

const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className="breakcrums">
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrums