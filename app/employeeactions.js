import constants from './constants';

export default {

  addemployee(empid, empfirstname, emplastname, designation, active) {
    return {type:constants.ADD_EMPLOYEE, empid, empfirstname, emplastname, designation, active};
  },

  deleteemployee(empid) {
    return{type:constants.DELETE_EMPLOYEE,empid};
  },

  editemployee(empid, empfirstname, emplastname, designation, active) {
    return{type:constants.EDIT_EMPLOYEE, empid, empfirstname, emplastname, designation, active};
  }
}
