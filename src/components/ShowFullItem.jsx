import React, { Component } from 'react'

export default class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div className="">
            <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} alt="Card" />
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.desc}</p>
            <b>{this.props.item.price}$</b>
            <div className="add-to-cart" onClick={() => {this.props.onAdd(this.props.item)}}>+</div>
        </div>
      </div>
    )
  }
}
