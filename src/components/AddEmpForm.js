import React from "react";
import { Button, Modal } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import moment from "moment";
import TextField from "@mui/material/TextField";

import { addEmp } from '../action/deptAction';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class AddEmpForm extends React.Component {
  constructor() {
    super();
    this.state = {
      formShow: false,
      formEmpId: "",
      formName: "",
      formDOJ: new Date()
    }
  }

  onChangeId = (event) => {
    // if (event.target.value === "") {
    //   alert("Employee Id Required");
    // }
    // else
    this.setState({ formEmpId: event.target.value.replace(/[^0-9]/, '') })
  }

  onChangeName = (event) => {
    // if (event.target.value === "") {
    //   alert("Employee Name Required");
    // }
    // else
    this.setState({ formName: event.target.value.replace(/[^A-Z a-z]/, '') });
  }

  onChangeDOJ = (date) => {
    this.setState({ formDOJ: date })
  }

  onAddEmp(event) {
    this.setState({
      formEmpId: "", formName: "", formDOJ: new Date(), formShow: false
    })
  }

  // handleEmpAddCancel() {
  //   this.setState({ formShow: false })
  // }

  handleFormOpen() {
    this.setState({ formShow: true })
  }

  handleEmpAddDetail(formDOJValue) {
    this.state.formEmpId !== "" && this.state.formName !== "" ?
      this.props.addEmp({ empID: this.state.formEmpId, name: this.state.formName, doj: formDOJValue }) :
      alert("Please Fill Employee ID & Employee Name");
    this.onAddEmp()
  }

  render() {
    const formDOJValue = moment((this.state.formDOJ).toString()).format("DD/MM/YYYY");
    return (
      <div>
        <Button onClick={() => this.handleFormOpen()}>Add Employee
        </Button>
        {this.state.formShow === true ? (
          <Modal show={this.state.formShow}>
            <Modal.Header>
              <Modal.Body>
                < form >
                  <TextField style={{ backgroundColor: this.state.formEmpId === "" ? 'red' : 'green' }} size="small" label={"Employee ID: "}
                    type="text" value={this.state.formEmpId} onChange={this.onChangeId} />
                  <TextField style={{ backgroundColor: this.state.formName === "" ? 'red' : 'green' }} size="small" label={"Employee Name: "}
                    type="text" value={this.state.formName} onChange={this.onChangeName} />
                  <label>
                    Employee DOJ :
                  </label>
                  <DatePicker label={""} selected={this.state.formDOJ} onChange={this.onChangeDOJ} dateFormat="MM/dd/yyyy" />
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={()=>this.handleEmpAddDetail(formDOJValue)
                }>Save Employee
                </Button>
                <Button onClick={() =>
                  this.onAddEmp()
                }>Cancel
                </Button>
              </Modal.Footer>
            </Modal.Header>
          </Modal>
        ) : null}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    selectDeptId: state.deptId,
    data: state.data
  });
}

function mapDispatchToProps(dispatch) {
  return ({
    addEmp: (newEmpData) => {
      dispatch(addEmp(newEmpData))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEmpForm);

