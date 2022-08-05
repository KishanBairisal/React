import data from '../data';

const INITIAL_STATE = {
  data,
  deptId: null,
  // selectDept: null
}
console.log(INITIAL_STATE.selectDept)

const dept = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case "SELECT_DEPT":
      return {
        ...state,
        deptId: action.payload,
        // selectDept: state.data.find((value) => value.deptId === action.payload)
      };

    case "ADD_EMP":
      const index = state.data.findIndex((value) => value.deptId === state.deptId);
      const updatedDeptDetails = {
        deptId: state.deptId,
        deptName: state.data[index].deptName,
        deptDetails: {
          deptManager: state.data[index].deptDetails.deptManager,
          noOfEmp: state.data[index].deptDetails.noOfEmp,
          empDetails: [...state.data[index].deptDetails.empDetails, action.addEmpPayload]
        }
      };
      
      return {
        ...state,
        data: [...state.data.fill(updatedDeptDetails, index, (index + 1))]
      }
    default: return state;
  }
}

export default dept;