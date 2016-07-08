import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import constants from './constants';

let Employees = [{"id":"1","firstname":"Dilip","lastname":"Gudivada","designation":"Software Engineer","active":"false"},
{"id":"2","firstname":"Ramesh","lastname":"Kodam","designation":"Software Engineer","active":"false"},
{"id":"3","firstname":"Marcelo","lastname":"Paiva","designation":"Director","active":"true"},
{"id":"4","firstname":"Alessandro","lastname":"Barroso","designation":"Font-end Developer","active":"true"},
{"id":"5","firstname":"Michel","lastname":"Marrache","designation":"Font-end Developer","active":"true"},
{"id":"6","firstname":"Joann","lastname":"Kim","designation":"Font-end Developer","active":"true"},
{"id":"7","firstname":"Jessica","lastname":"Nace","designation":"Font-end Developer","active":"true"}];

let employeeReducer = (state = Employees, action) =>  {
  console.log(action);
  switch(action.type) {
    case constants.ADD_EMPLOYEE:
    console.log("Add Employee Details");
    return [
      ...state,
      {
        id:action.empid,
        firstname:action.empfirstname,
        lastname:action.emplastname,
        designation:action.designation,
        active:action.active
      }
    ]
    case constants.DELETE_EMPLOYEE:
    console.log("Delete Employee Details");
    return state.filter(Employees => Employees.id !== action.empid);
    case constants.EDIT_EMPLOYEE:
    console.log("Edit Employee Details");
    return   state.map(Employees =>
      Employees.id === action.empid ?
      {
      Employees ,
        id:action.empid,
        firstname: action.emplastname,
        lastname:action.emplastname,
        designation:action.designation,
        active: action.active
      } :
        Employees
    );
    default:
    return state
  }
}



const employeeStore = createStore(employeeReducer);
export default employeeStore;
