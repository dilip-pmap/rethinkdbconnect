import React, { Component } from 'react';
// constructor() {
//   super();
//
//   this.state = {
//     isOpened: true
//   }
// }
//
// toggle(){
//   this.setState({isOpened: !this.state.isOpened})
// }
//onClick={this.toggle.bind(this)}
class Toggable extends Component {

  onBuyClick(){
    this.props.onBuy(this.props.price)
  }
  onHeaderClick(){
    this.props.onToggle(this.props.id)
  }

  render(){
    return (
      <div className="toggable">
        <header  onClick={this.onHeaderClick.bind(this)}>{this.props.name}</header>

        {this.props.isOpened?
          <div>
            <img src={this.props.url} />
            R$ {this.props.price.toFixed(2)}
            <button onClick={this.onBuyClick.bind(this)}>Buy</button>
          </div>
        : ''}

      </div>
    )
  }
}

export default Toggable
