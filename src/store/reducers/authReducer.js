const initState = {
  authError: null,
}

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'LOGIN_ERROR':
      console.log('login failed')
      state = {
        ...state,
        authError: 'Login Failed'
      }
      break;
    case 'LOGIN_SUCCESS':
      console.log('login success')
      state = {
        ...state,
        authError: null,
      }
      break
    default:
      break;
  }
  return state
}

export default authReducer