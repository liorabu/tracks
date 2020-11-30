import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errMessage: action.payload };
    case 'signup':
      return { ...state, errorMesssage: '', token: action.payload };
    case 'signin':
      return { errorMesssage: '', token: action.payload };
      case 'signout':
        return {...state,token:null};
    case 'clear_error_message':
      return { ...state, errMessage:'' }
    default:
      return state;
  }
};

const signup = dispatch => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signup', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signup', payload: response.data.token })
    } catch (err) {
      dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
    }
  };
};

const signin = dispatch => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signin', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data.token })
    } catch (err) {
      dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' })
    }
  }
}
const signout = dispatch => async ()=>{
  await AsyncStorage.removeItem('token');
dispatch({type:'signout'});
}

const tryLocalSignin=dispatch=>async ()=>{
  const token=await AsyncStorage.getItem('token');
  if(token){
    dispatch({type:'signin',payload:token})
  }
}

const clearErrorMessage = dispatch =>()=> {
  dispatch({ type: 'clear_error_message' })
}

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout,clearErrorMessage,tryLocalSignin },
  { token: null, errMessage: '',isLoading:true }
);