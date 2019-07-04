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
    case "SIGNOUT_SUCCESS":
      console.log('sign out success')
      break
    case "SIGNUP_SUCCESS":
      console.log("sign up success")
      state = {
        ...state,
        authError: null
      }
      break
    case "SIGNUP_ERROR":
        console.log("sign up error")
        state = {
          ...state,
          authError: action.err.message
        }
        break
    default:
      break;
  }
  return state
}

export default authReducer