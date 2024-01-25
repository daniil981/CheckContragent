import{
     LOGIN_SUCCESS,
     LOGIN_FAIL,
     USER_LOADED_SUCCESS ,
     USER_LOADED_FAIL,
     AUTHENTICATED_FAIL,
     AUTHENTICATED_SUCCESS,
     PASSWORD_RESET_FAIL,
     PASSWORD_RESET_SUCCESS,
     PASSWORD_RESET_CONFIRM_FAIL,
     PASSWORD_RESET_CONFIRM__SUCCESS,
     SIGNUP_FAIL,
     SIGNUP_SUCCESS,
     ACTIVATION_FAIL,
     ACTIVATION__SUCCESS,
     LOGOUT
} from '../actions/types'

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null
}



export default function(state = initialState, action) {
    const {type, payload} = action;


    switch(type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access);
            localStorage.setItem('refresh', payload.refresh);
            return {
               ...state,
               isAuthenticated: true,
               access: payload.access,
               refresh: payload.refresh
            }

        case  USER_LOADED_SUCCESS:
            return {
                ...state,
                user: payload
            }

        case LOGIN_FAIL:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
               isAuthenticated: null,
               access: null,
               refresh: null
            }

        case  USER_LOADED_FAIL:
            return {
                 ...state,
                 user: null
            }

        case AUTHENTICATED_FAIL:
            return{
                ...state,
                isAuthenticated: false
            }  
            
            
        case AUTHENTICATED_SUCCESS:
            return{
                ...state,
                isAuthenticated: true
            }   
            
        case SIGNUP_FAIL:    
        case LOGOUT:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
               isAuthenticated: null,
               access: null,
               refresh: null
            }

        case SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            }    

        default:
            return state
            

        case PASSWORD_RESET_FAIL:
        case PASSWORD_RESET_SUCCESS:
        case PASSWORD_RESET_CONFIRM_FAIL:
        case PASSWORD_RESET_CONFIRM__SUCCESS:
        case ACTIVATION__SUCCESS:
        case ACTIVATION_FAIL:        
            return{
                 ...state
                }  
    }
}