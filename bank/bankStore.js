import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import constants from './constants';

let bankReducer = (state = 0, action) =>  {
  console.log(action);
  switch(action.type) {
    case constants.DEPOSIT_INTO_ACCOUNT:
    console.log("Depositing");
    return state + Number(action.amount)
    case constants.WITHDRAW_FROM_ACCOUNT:
    console.log("withdrawing");
    return state - Number(action.amount)
    default:
    return state
  }
}

const bankStore = createStore(bankReducer);

export default bankStore;
