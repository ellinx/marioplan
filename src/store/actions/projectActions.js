export const createProject = (project) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make asynchrous call to database
    const firestore = getFirestore()
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'LL',
      authorLastName: 'XX',
      authorId: 1234,
      createdAt: new Date()
    }).then(()=>{
      dispatch({type: 'CREATE_PROJECT', project})
    }).catch((err)=>{
      dispatch({type: 'CREATE_PROJECT_ERROR', err})
    })

    
  }
}