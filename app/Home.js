import React, { Component } from 'react';
import {render} from 'react-dom';
//import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Router, Route, IndexRoute, Link } from 'react-router';

import About from './About';
import Home from './Home';

class SearchBox extends Component {

  render(){
    return(
      <input type="search"
             value={this.props.value}
             onChange={this.props.onSearch.bind(this)} />
    )
  }
}

class EmployeeList extends Component {

  render(){
    return(
    <table className="table table-bordered">
      <thead>
        <tr>
          <th> Employee Id</th>
          <th> Employee Name</th>
        </tr>
      </thead>
      <tbody>
        {this.props.employee.map(employee => <tr key={employee.id}><td>{employee.id}</td><td>{employee.name}</td></tr>)}
      </tbody>
    </table>
    )
  }
}


// main component using child components SearchBox and EmployeeList
class App extends Component {
  constructor(){
    super();
    this.state={
      searchValue: ''
    }
  }
  handleSearch(event){
    console.log("searching with employee name")
    this.setState({
      searchValue: event.target.value
    })
  }
  render(){
let filteredEmployees =  this.props.employees.filter(employee => {
return employee.name.indexOf(this.state.searchValue) != -1 })
    return (
      <div>
      <h1>ProcessMAP Employee Details </h1>
      Filter By Employee Name: &nbsp;
      <SearchBox value={this.state.searchValue} onSearch={this.handleSearch.bind(this)} />
      <EmployeeList employee={filteredEmployees} />
    </div>
    );

  }
}

let employees = [
  {id: 1, name: 'dilip'},
  {id: 2, name: 'ramesh'},
  {id: 3, name: 'marcelo'},
  {id: 4, name: 'alessandro'},
  {id: 5, name: 'michel'},
  {id: 6, name: 'jessica'},
  {id: 7, name: 'jonn'},
  {id: 8, name: 'cyrus walker'}
];
render(<App employees={employees} />, document.getElementById('root'));
