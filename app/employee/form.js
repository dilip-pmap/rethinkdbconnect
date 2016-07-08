import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';
import { connect } from 'react-redux';
import employeeStore from './employeeStore';
import constants from './constants';
import employeeactions from './employeeactions';
// Parent Component
class App extends Component {

  handleSubmit(e){
    e.preventDefault();
    employeeStore.dispatch(employeeactions.addemployee(this.refs.empid.value,this.refs.empname.value));
    this.refs.empid.value="";
    this.refs.empname.value="";
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
          },
        };
    return (
    <table>
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
          <form onSubmit={this.handleSubmit.bind(this)}>
Employee Id:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input ref="empid"  type="text"/><br/>
Employee Name: &nbsp;
<input ref="empname" type="text"/><br/>
<input type="submit"/>
</form>
        </td>
      </tr>


    </tbody>
      </table>
    );
  }
}

render(<App />, document.getElementById('root'));
