import React from "react";
import { connect } from "react-redux";

import './App.css';
import { selectDept } from '../action/deptAction';


class Dept extends React.Component {

  render() {
    return (
      <div style={{ marginLeft: "50px", marginRight: "50px" }}>
        <h5>
          <b>
            Deptartment List:
          </b>
        </h5>
        {this.props.deptDetailsData.map((deptDetail, key) =>
          <div key={key}>
            <button onClick={()=>this.props.setSelectDeptId(deptDetail.deptId)}>
              {deptDetail.deptName}
            </button>
          </div>
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    deptDetailsData: state.data
  });
}

function mapDispatchToProps(dispatch) {
  return ({
    setSelectDeptId: (selectedEmpData) => { dispatch(selectDept(selectedEmpData)) }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Dept);