export const createProject = (project) => {
  return (dispatch, getState) => {
    // make asynchrous call to database
    dispatch({type: 'CREATE_PROJECT', project})
  }
}