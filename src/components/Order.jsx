import React, { Component } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";

export default class Order extends Component {
  render() {
    return (
      <div className="item">
        <img src={"./img/" + this.props.item.img} alt="Card" />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.price}$</p>
        <IoMdCloseCircleOutline className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}/>
      </div>
    )
  }
}
