import React from "react";
import { connect } from 'react-redux';

import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddEmpForm from './AddEmpForm';
import './App.css';

class Employee extends React.Component {

  render() {
    const selectDeptData = this.props.data.find((value) => value.deptId === this.props.selectedDeptId);
    return (
      <div>
        <div style={{ textAlign: "left", marginLeft: "20px" }}>
          <h5 >
            <b>Dept. Details:
            </b>
          </h5>
          <div>Dept. Name:
            <b>{selectDeptData.deptName}
            </b>
          </div>
          <div>Dept. Manager:
            <b>{selectDeptData.deptDetails.deptManager}
            </b>
          </div>
          <div> No of Employee:
            <b>{selectDeptData.deptDetails.noOfEmp}
            </b>
          </div>
          <div>
            <b>Employee List:
            </b>
            <AddEmpForm />
          </div>
        </div>
        <table>
          
            <td><b>Employee ID</b>
            </td>
            <td><b>Employee Name</b>
            </td>
            <td><b>Employee DOJ</b>
            </td>
          
          {selectDeptData.deptDetails.empDetails.map((selectedEmpData) =>
            <tr>
              <td>{selectedEmpData.empID}
              </td>
              <td>{selectedEmpData.name}
              </td>
              <td>{selectedEmpData.doj}
              </td>
            </tr>
          )}
        </table>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return ({
    // selectDeptData: state.selectDept,
    data: state.data,
    selectedDeptId: state.deptId
  });
}

export default connect(mapStateToProps)(Employee);