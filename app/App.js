import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';
import { connect, Provider } from 'react-redux';
import bankStore from './bankStore';
import constants from './constants';
import bankactions from './bankactions';

class App extends Component {
 handleDeposit(e){
   console.log(this.refs.amount.value);
  // bankStore.dispatch({type:constants.DEPOSIT_INTO_ACCOUNT, amount: this.refs.amount.value})
//bankStore.dispatch(bankactions.deposit(this.refs.amount.value))
this.props.onDeposit(this.refs.amount.value)
this.refs.amount.value="";
 }
handleWithdraw(e){
  console.log(this.refs.amount.value);
//  bankStore.dispatch({type:constants.WITHDRAW_FROM_ACCOUNT, amount: this.refs.amount.value})
//bankStore.dispatch(bankactions.withdraw(this.refs.amount.value))
this.props.onWithdraw(this.refs.amount.value)
this.refs.amount.value="";
}
// componentDidMount(){
//   bankStore.subscribe(() => {
//     this.forceUpdate()
//   })
// }  bankStore.getState()
  render() {

    return (
      <div>
        <header><img src="www.pro-react.com/logos/redux-bank.svg" witdh="150" ></img></header>
        <br/>
        <h1>Your balance is $ {this.props.balance} </h1>
        <div className="atm">
          <input type="text" placeholder="Enter Amount" ref="amount"/>
          <br/>
          <button onClick={this.handleWithdraw.bind(this)}>withdraw</button>
          <button onClick={this.handleDeposit.bind(this)}>Deposit</button>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  balance: PropTypes.number,
  onDeposit: PropTypes.func,
  onWithdraw: PropTypes.func
}

let mapStateToProps = (state) => {
  return { balance: state}
}

let mapDisptachToProps = (dispatch) => {
  return {
    onDeposit: amount => dispatch(bankactions.deposit(amount)),
    onWithdraw: amount => dispatch(bankactions.withdraw(amount)),
  }
}
let  bankAppContainer = connect(mapStateToProps, mapDisptachToProps)(App)
render(
<Provider store={bankStore}><bankAppContainer /></Provider>, document.getElementById('root'));
