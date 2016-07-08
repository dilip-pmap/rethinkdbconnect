import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';
import { connect } from 'react-redux';
import employeeStore from './employeeStore';
import constants from './constants';
import employeeactions from './employeeactions';
// Parent Component
let empid="";

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        editing: false
      };
    }
  handleSubmit(e){
     e.preventDefault();
    if(this.state.editing === true ){
      alert("welcome editing");
      employeeStore.dispatch(employeeactions.editemployee(empid,this.refs.empfirstname.value,this.refs.emplastname.value,
      this.refs.designation.value,this.refs.active.value));
      alert("Employee Id:" + empid   +"  details udpated successfully");
        this.setState({ editing: false });
        this.refs.empfirstname.value="";
        this.refs.emplastname.value="";
        this.refs.designation.value="";
        this.refs.active.checked= false;
    }
    else {
      employeeStore.dispatch(employeeactions.addemployee(this.refs.empid.value,this.refs.empfirstname.value,this.refs.emplastname.value,
      this.refs.designation.value,this.refs.active.value));
      alert("Employee Id:" + this.refs.empid.value  +"  details saved successfully");
      this.setState({ editing: false });
      this.refs.empid.value="";
      this.refs.empfirstname.value="";
      this.refs.emplastname.value="";
      this.refs.designation.value="";
      this.refs.active.checked= false;
    }
  }

  onHandleDelete(id) {
  let isConfirm=  confirm("are you sure to delete this record ?")
  if(isConfirm === true)
  {console.log(id);
    alert(id);
    let empid=id;
    alert(empid);
    employeeStore.dispatch(employeeactions.deleteemployee(empid));
  }
  else {
  return
  }
  }
  onHandleEdit(id,firstname,lastname,designation,Active) {
      alert("editing record");
      console.log(id);
      this.setState({ editing: true });
      empid=id;
       this.refs.empfirstname.value=firstname;
      this.refs.emplastname.value=lastname
       this.refs.designation.value=designation;
      this.refs.active.checked= Active;

  }

  componentDidMount(){
    employeeStore.subscribe(() => {
      this.forceUpdate();
    })
  }
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
          }
        };
        let element;
        if(this.state.editing)
        {
          element = (empid);
        }
        else {
          element = (<input ref="empid"  type="text" />);

        }
return (
  <div>
    <table >
  <tbody>
    <tr>
      <td colSpan="2">
        <header style={styles.base}>Employee Details Form</header>
      </td>
    </tr>
  <tr>
    <td>
      &nbsp;
    </td>
    <td className="bodycontent">
      <form onSubmit={this.handleSubmit.bind(this)} >
Employee Id:&nbsp;{element}
<br/>
First Name: &nbsp;
<input ref="empfirstname" type="text"/><br/>
Last Name: &nbsp;
<input ref="emplastname" type="text"/><br/>
Designation: &nbsp;
<select ref="designation">
  <option value="">Select</option>
<option value="Software Engineer">Software Engineer</option>
<option value="Director">Director</option>
<option value="Font-end Developer">Font-end Developer</option>
</select><br/>
Active: &nbsp;
<input type="checkbox"  ref="active"/><br/>
<input type="submit"/>
</form>
    </td>
  </tr>
</tbody>
  </table>
<br/>
  <table className="tableBorder">
    <thead className="tableheader">
      <tr>
          <th>&nbsp;Employee Id&nbsp;</th>
        <th>&nbsp;First Name&nbsp;</th>
        <th>&nbsp;Last Name&nbsp;</th>
        <th>&nbsp;Designation&nbsp;</th>
        <th>&nbsp;Is Active&nbsp;</th>
        <th>Delete Record</th>
        <th>Edit Record</th>
        </tr>
      </thead>
        <tbody>
    {employeeStore.getState().map((employee,index) =><tr key={index}>
      <td  className="tableBorder">{employee.id}</td>
        <td  className="tableBorder">{employee.firstname}</td>
        <td className="tableBorder">{employee.lastname}</td>
        <td className="tableBorder">
        <select defaultValue={employee.designation}>
        <option value="Software Engineer">Software Engineer</option>
        <option value="Director">Director</option>
        <option value="Font-end Developer">Font-end Developer</option>
        </select>
        </td>
        <td className="tableBorder"><input type="checkbox"/></td>
          <td className="tableBorder"><button className="btndanger" onClick={this.onHandleDelete.bind(this,employee.id)}>Delete</button></td>
          <td className="tableBorder"><button className="btnprimary" onClick={this.onHandleEdit.bind(this,employee.id,employee.firstname,employee.lastname,employee.designation,employee.active)}>Edit</button></td>
          </tr>)}
    </tbody>
    </table>
  </div>
    );
  }
}

render(<App />, document.getElementById('root'));
