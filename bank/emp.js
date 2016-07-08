import React, {Component} from 'react';
import {render} from 'react-dom';

import {Navbar, NavBrand} from 'react-bootstrap';

// Parent Component
class App extends Component {

  render() {
    const styles = {
          base: {
            border: '1px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.25)',
            width: '100%',
          },
          brand: {
            marginLeft: -20,
          },
          logo: {
            display: 'inline-block',
            width: 'auto',
            maxHeight: '26px',
            marginTop: '-2px',
            marginLeft: '10px',
            cursor: 'pointer',
          },
        };
    return (
    <table>
      <tbody>
        <tr>
          <td colSpan="2">
            <header style={styles.base}>ProcessMAP
</header>
          </td>
        </tr>
      <tr>
        <td>
          &nbsp;&nbsp;
        </td>
        <td className="bodycontent">
            <EmployeeList employee={Employees} />
        </td>
      </tr>
    </tbody>
      </table>
    );
  }
}

class EmployeeList extends Component {

  handleChange(e) {
    e.preventdefault();
    console.log("change function");
  }
  onHandleDelete(e) {
    confirm("are you sure to delete this record ?")
  }
  onHandleEdit(e) {
      alert("editing record");
  }
  render(){
    return (
      <table className="tableBorder">
        <thead className="tableheader">
          <tr>
            <th>&nbsp;First Name&nbsp;</th>
            <th>&nbsp;Last Name&nbsp;</th>
            <th>&nbsp;Designation&nbsp;</th>
            <th>&nbsp;Is Active&nbsp;</th>
            <th>Delete Record</th>
            <th>Edit Record</th>
            </tr>
          </thead>
            <tbody>
        {this.props.employee.map((employee,index) =><tr key={index}>
            <td  className="tableBorder">{employee.firstname}</td>
            <td className="tableBorder">{employee.lastname}</td>
            <td className="tableBorder">
            <select defaultValue={employee.designation}>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Director">Director</option>
            <option value="Font-end Developer">Font-end Developer</option>
            </select>
            </td>
            <td className="tableBorder"><input type="checkbox" checked={employee.active} onChange={this.handleChange.bind(this)}/></td>
              <td className="tableBorder"><button className="btndanger" onClick={this.onHandleDelete.bind(this)}>Delete</button></td>
              <td className="tableBorder"><button className="btnprimary" onClick={this.onHandleEdit.bind(this)}>Edit</button></td>
              </tr>)}
        </tbody>
        </table>
    )
  }
}

let Employees = [
  {"id":"1","firstname":"Dilip","lastname":"Gudivada","designation":"Software Engineer","active":"false"},
  {"id":"2","firstname":"Ramesh","lastname":"Kodam","designation":"Software Engineer","active":"false"},
  {"id":"3","firstname":"Marcelo","lastname":"Paiva","designation":"Director","active":"true"},
{"id":"4","firstname":"Alessandro","lastname":"Barroso","designation":"Font-end Developer","active":"true"},
{"id":"5","firstname":"Michel","lastname":"Marrache","designation":"Font-end Developer","active":"true"},
{"id":"6","firstname":"Joann","lastname":"Kim","designation":"Font-end Developer","active":"true"},
{"id":"7","firstname":"Jessica","lastname":"Nace","designation":"Font-end Developer","active":"true"}];


render(<App />, document.getElementById('root'));
