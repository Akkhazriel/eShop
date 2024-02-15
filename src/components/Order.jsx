import React, { Component } from 'react'

export default class Order extends Component {
  render() {
    return (
      <div className="item">
        <img src={"./img/" + this.props.item.img} alt="Card" />
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price}$</b>
      </div>
    )
  }
}
