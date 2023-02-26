import * as api from '../api/index.js'
// import authReducer from '../reducers/auth'
import { setCurrentUser } from './currentUser'

// dispatch() is the method used to dispatch actions and trigger state changes to the store. react-redux is simply trying to give you convenient access to it.
export const signup = (authData, navigate) => async (dispatch) => {
    try {
        // sign up the user..
        const { data } = await api.signUp(authData)
        
        dispatch({ type: 'AUTH', data })
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
        // toast.success("Signed Up successfully");
        // alert("Signed Up successfully")
        navigate('/')
    } catch (error) {
        console.log(error.response.data)
        console.log("Kya ho gya")
    }
}

export const login = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.logIn(authData)
        dispatch({ type: 'AUTH', data})
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}
