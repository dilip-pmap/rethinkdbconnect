import React, { Component } from 'react'
import {render} from 'react-dom'
import Toggable from './Toggable'

class App extends Component {
  constructor() {
    super()
    this.state = {
      amountOfItems: 0,
      totalPrice: 0,
      openedTaco: 0
    }
  }

  buy(price){
    let nextState = this.state
    nextState.amountOfItems ++
    nextState.totalPrice += price
    this.setState(nextState)
  }

  toggle(id){
    this.setState({
      openedTaco: id
    })
  }

  render(){
    return (
      <div>

        <h1>You ordered {this.state.amountOfItems} tacos</h1>
        <h2>Your total is R$ {this.state.totalPrice.toFixed(2)}</h2>
        {
          this.props.tacos.map(taco => <Toggable id={taco.id} key={taco.id}
                                                isOpened={this.state.openedTaco == taco.id}
                                                 name={taco.name}
                                                 url={taco.url}
                                                 price={taco.price}
                                                 onToggle={this.toggle.bind(this)}
                                                 onBuy={this.buy.bind(this)} />)
        }
      </div>
    );
  }
}


let tacos = [
  {
    id: 1,
    name: 'Carnitas',
    url:'https://farm6.staticflickr.com/5301/5668162498_3acfecea39_z.jpg',
    price: 100
  },

  {
    id: 2,
    name: 'Fish',
    url:'http://blog.sandiego.org/wp-content/uploads/2010/07/rubios_fish_taco.jpg',
    price: 120
  }
]



render(<App tacos={tacos} />, document.getElementById('root'));
