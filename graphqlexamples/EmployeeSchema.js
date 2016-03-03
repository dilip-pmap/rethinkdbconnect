var mongoose = require('mongoose');

var EmployeeSchema = new mongoose.Schema({
  id: {
    type: String
  },
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  designation: {
    type: String
  },
  active: {
    type: Boolean
  }
});

var Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;
