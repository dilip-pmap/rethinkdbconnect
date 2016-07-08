import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';
import { connect } from 'react-redux';
import employeeStore from './employeeStore';
import constants from './constants';
import employeeactions from './employeeactions';
// Parent Component
let editempid = "";
let editempfirstname="";
let editemplastname="";
let editdesignation="";
let editactive= false;
class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        editing: false
      };
    }
  handleSubmit(e){
    e.preventDefault();
    employeeStore.dispatch(employeeactions.addemployee(this.refs.empid.value,this.refs.empfirstname.value,this.refs.emplastname.value,
    this.refs.designation.value,this.refs.active.value));
    alert("Employee Id:" + this.refs.empid.value  +"  details saved successfully")
   this.refs.empid.value="";
   this.refs.empfirstname.value="";
   this.refs.emplastname.value="";
   this.refs.designation.value="";
   this.refs.active.checked= false;
  }
  onHandleChange(id) {

//  e.preventdefault();
  alert("hi");
  console.log(id);
    alert(id);
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
      editempid=id;
      editempfirstname=firstname;
      editemplastname=lastname
      editdesignation=designation;
      editactive= Active;
    alert(id);
  }

handleEditing(e)
{
  alert("welcome editing");
  employeeStore.dispatch(employeeactions.editemployee(editempid,this.refs.editempfirstname.value,this.refs.editemplastname.value,
  this.refs.editdesignation.value,this.refs.editactive.value));
  alert("Employee Id:" + editempid +"  details udpated successfully")
    this.setState({ editing: false });
}

handleCancel(e)
{
  alert("cancel editing");
  e.preventdefault();
  this.setState({ editing: false });
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
if (this.state.editing) {
  element =
  <div>
    <header style={styles.base}>Edit Employee Details Form</header>
  <form onSubmit={this.handleEditing.bind(this)} >
  Employee Id:&nbsp;
  {editempid}<br/>
  First Name: &nbsp;
  <input type="text" defaultValue={editempfirstname} ref="editempfirstname"  /><br/>
  Last Name: &nbsp;
  <input ref="editemplastname" type="text" defaultValue={editemplastname}/><br/>
  Designation: &nbsp;
  <select ref="editdesignation" defaultValue={editdesignation}>
  <option value="">Select</option>
  <option value="Software Engineer">Software Engineer</option>
  <option value="Director">Director</option>
  <option value="Font-end Developer">Font-end Developer</option>
  </select><br/>
  Active: &nbsp;
  <input type="checkbox"  ref="editactive"/><br/>
  <input type="submit"/>
<input type="reset" value="Cancel" onClick={this.handleCancel.bind({this})} />
  </form></div>
} else {
  element = (
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
Employee Id:&nbsp;
<input ref="empid"  type="text"/><br/>
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
          <td className="tableBorder"><input type="checkbox" checked={employee.active} onChange={this.onHandleChange.bind(this,employee.id)}/></td>
            <td className="tableBorder"><button className="btndanger" onClick={this.onHandleDelete.bind(this,employee.id)}>Delete</button></td>
            <td className="tableBorder"><button className="btnprimary" onClick={this.onHandleEdit.bind(this,employee.id,employee.firstname,employee.lastname,employee.designation,employee.active)}>Edit</button></td>
            </tr>)}
      </tbody>
      </table>
    </div>
  );
}
    return (
<div>
  {element}
</div>
    );
  }
}

render(<App />, document.getElementById('root'));
