const selectDept = (selectedEmpData) => {
  return {
    type: 'SELECT_DEPT',
    payload: selectedEmpData
  }
}

const addEmp = (newEmpData) => {
  return {
    type: 'ADD_EMP',
    addEmpPayload: newEmpData
  }
}

export {
  selectDept,
  addEmp
}