import { ADD_DOCTOR_FAIL, ADD_DOCTOR_REQUEST, ADD_DOCTOR_RESET, ADD_DOCTOR_SUCCESS, DELETE_DOCTOR_FAIL, DELETE_DOCTOR_REQUEST, DELETE_DOCTOR_RESET, DELETE_DOCTOR_SUCCESS, GET_ALL_DOCTOR_FAIL, GET_ALL_DOCTOR_REQUEST, GET_ALL_DOCTOR_SUCCESS, UPDATE_DOCTOR_FAIL, UPDATE_DOCTOR_REQUEST, UPDATE_DOCTOR_RESET, UPDATE_DOCTOR_SUCCESS } from "../constants/DoctorConstants";
import { combineReducers } from "redux";


export const addNewDoctorReducer = (
  state = {
    errorMessage : "", 
    message: "",
    isAdded:false
  },
  action
) => {
  switch (action.type) {
    case ADD_DOCTOR_REQUEST:
      return { ...state, loading: true };

    case ADD_DOCTOR_SUCCESS:
      return {
        ...state,
        loading: false,
        isAdded: true,
        message: action.payload.message,
      };

    case ADD_DOCTOR_FAIL:
      return {
        ...state,
        loading: false,
        isAdded: false,
        error: action.payload,
        errorMessage : action.payload.message
      };
    case ADD_DOCTOR_RESET:
      return {
        ...state,
        isAdded: false,
        errorMessage: "",
        message : ""
      };
    default:
      return state;
  }
};

export const getAllDoctorReducer = (
    state = {
        doctors: []
    },
    action
  ) => {
    switch (action.type) {
      case GET_ALL_DOCTOR_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_DOCTOR_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          doctors : action.payload.data
        };
  
      case GET_ALL_DOCTOR_FAIL:
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

  export const doctorUpdateDeleteReducer = (
    state = { isUpdated: false, isDeleted: false,message: null },
    action
  ) => {
    switch (action.type) {
      case DELETE_DOCTOR_REQUEST:
      case UPDATE_DOCTOR_REQUEST:
        return { ...state, loading: true };
  
      case DELETE_DOCTOR_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: true,
          message:action.payload.message
        };
  
      case UPDATE_DOCTOR_SUCCESS:
        return {
          ...state,
          loading: false,
          updated: action.payload.data,
          isUpdated: true,
          message:action.payload.message
        };
  
      case DELETE_DOCTOR_FAIL:
      case UPDATE_DOCTOR_FAIL:
        return { ...state, error: action.payload };
  
      case DELETE_DOCTOR_RESET:
        return {
          ...state,
          isDeleted: false,
        };
      case UPDATE_DOCTOR_RESET:
        return {
          ...state,
          isUpdated: false,
        };
      default:
        return state;
    }
  };

  const doctorReducer = combineReducers({
    addNewDoctor : addNewDoctorReducer,
    getAllDoctor : getAllDoctorReducer,
    doctorUpdateDelete :doctorUpdateDeleteReducer
  });
  
  export default doctorReducer;