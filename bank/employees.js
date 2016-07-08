import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';
import { connect } from 'react-redux';
import bankStore from './bankStore';
import constants from './constants';
import bankactions from './bankactions';
var imgpath = './bank.svg';
class App extends Component {
 handleDeposit(e){
   console.log(this.refs.amount.value);
//  bankStore.dispatch({type:constants.DEPOSIT_INTO_ACCOUNT, amount: this.refs.amount.value});
bankStore.dispatch(bankactions.deposit(this.refs.amount.value));
this.refs.amount.value="";
 }
handleWithdraw(e){
  console.log(this.refs.amount.value);
// bankStore.dispatch({type:constants.WITHDRAW_FROM_ACCOUNT, amount: this.refs.amount.value});
bankStore.dispatch(bankactions.withdraw(this.refs.amount.value));
this.refs.amount.value="";
}
componentDidMount(){
  bankStore.subscribe(() => {
    this.forceUpdate();
  })
}
  render() {

    return (
      <div>
        <header><img src='http://www.pro-react.com/logos/redux-bank.svg' witdh="100px" ></img></header>
        <br/>
        <h1>Your balance is $ {bankStore.getState()} </h1>
        <br/>
        <div className="atm">
          <input  type="text" placeholder="Enter Amount" ref="amount" />
          <br/><br/>
          <button onClick={this.handleWithdraw.bind(this)}>withdraw</button> &nbsp; &nbsp;
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

// let mapStateToProps = (state) => {
//   return { balance: state}
// }
//
// let mapDisptachToProps = (dispatch) => {
//   return {
//     onDeposit: amount => dispatch(bankactions.deposit(amount)),
//     onWithdraw: amount => dispatch(bankactions.withdraw(amount)),
//   }
// }
// let  bankAppContainer = connect(mapStateToProps, mapDisptachToProps)(App)

// <Provider store={bankStore}><bankAppContainer /></Provider>
render(
<App  />, document.getElementById('root'));
