import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import Employee from './components/Employee.js';
import Dept from './components/Dept';

class App extends React.Component {

  render() {

    return (
      <div style={{ marginLeft: "50px", marginRight: "50px", width: "1400px", marginTop: "50px" }}>
        <div style={{ border: "2px solid" }}>
          <h4 style={{ textAlign: "left", marginLeft: "50px", marginRight: "50px", width: "1434px" }}>SoftSuave Technologies
          </h4>
        </div>
        <td style={{ border: "2px solid" }}>
          <Dept />
        </td>
        <td style={{ width: "1200px", border: "2px solid" }}>
          {this.props.selectedDeptId !== null ? (<Employee />) : null}
        </td>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    selectedDeptId: state.deptId
  });
}

export default connect(mapStateToProps)(App);

