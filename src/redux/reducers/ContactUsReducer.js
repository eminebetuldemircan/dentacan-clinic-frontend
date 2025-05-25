import { combineReducers } from "redux";
import {
  DELETE_CONTACT_US_MESSAGE_FAIL,
  DELETE_CONTACT_US_MESSAGE_REQUEST,
  DELETE_CONTACT_US_MESSAGE_RESET,
  DELETE_CONTACT_US_MESSAGE_SUCCESS,
  GET_ALL_CONTACT_US_MESSAGE_FAIL,
  GET_ALL_CONTACT_US_MESSAGE_REQUEST,
  GET_ALL_CONTACT_US_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAIL,
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_RESET,
  SEND_MESSAGE_SUCCESS,
} from "../constants/ContactUsConstants";

export const addNewContactUsMessageReducer = (
  state = {
    errorMessage: "",
    message: "",
    isAdded: false,
  },
  action
) => {
  switch (action.type) {
    case SEND_MESSAGE_REQUEST:
      return { ...state, loading: true };

    case SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        isAdded: true,
        message: action.payload.message,
      };

    case SEND_MESSAGE_FAIL:
      return {
        ...state,
        loading: false,
        isAdded: false,
        error: action.payload,
        errorMessage: action.payload.message,
      };
    case SEND_MESSAGE_RESET:
      return {
        ...state,
        isAdded: false,
        errorMessage: "",
        message: "",
      };
    default:
      return state;
  }
};

export const getAllContactUsMessageReducer = (
  state = {
    contactUsMessages: [],
  },
  action
) => {
  switch (action.type) {
    case GET_ALL_CONTACT_US_MESSAGE_REQUEST:
      return { ...state, loading: true };

    case GET_ALL_CONTACT_US_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        contactUsMessages: action.payload.data,
      };

    case GET_ALL_CONTACT_US_MESSAGE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};


  export const deleteContactUsMessageReducer = (
    state = { message : null,
        isDeleted : false ,
},
    action
  ) => {
    switch (action.type) {
      case DELETE_CONTACT_US_MESSAGE_REQUEST:
    
        return { ...state, loading: true };
  
      case DELETE_CONTACT_US_MESSAGE_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: true,
          message : action.payload
        };
  
    
  
      case DELETE_CONTACT_US_MESSAGE_FAIL:
    
        return { ...state, error: action.payload.error };
  
      case DELETE_CONTACT_US_MESSAGE_RESET:
        return {
          ...state , isDeleted : false
        };
  
      default:
        return state;
    }
  };

const contactUsReducer = combineReducers({
  addNewContactUsMessage: addNewContactUsMessageReducer,
  getAllContactUsMessage: getAllContactUsMessageReducer,
  deleteContactUsMessage: deleteContactUsMessageReducer,
});

export default contactUsReducer;
