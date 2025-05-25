import { combineReducers } from "redux";
import {
  GET_ALL_APPOINTMENT_FAIL,
  GET_ALL_APPOINTMENT_REQUEST,
  GET_ALL_APPOINTMENT_SUCCESS,
  ADD_APPOINTMENT_FAIL,
  ADD_APPOINTMENT_REQUEST,
  ADD_APPOINTMENT_RESET,
  ADD_APPOINTMENT_SUCCESS,
  VERIFY_APPOINTMENT_SUCCESS,
  VERIFY_APPOINTMENT_REQUEST,
  VERIFY_APPOINTMENT_FAIL,
  CANCEL_APPOINTMENT_REQUEST,
  CANCEL_APPOINTMENT_SUCCESS,
  CANCEL_APPOINTMENT_FAIL,
  CHANGE_APPOINTMENT_FAIL,
  CHANGE_APPOINTMENT_REQUEST,
  CHANGE_APPOINTMENT_SUCCESS,
  GET_ALL_APPOINTMENT_BY_DATE_REQUEST,
  GET_ALL_APPOINTMENT_BY_DATE_SUCCESS,
  GET_ALL_APPOINTMENT_BY_DATE_FAIL,
} from "../constants/AppointmentConstants";

export const addNewAppointmentReducer = (
  state = {
    errorMessage: "",
    message: "",
    isAdded: false,
  },
  action
) => {
  switch (action.type) {
    case ADD_APPOINTMENT_REQUEST:
      return { ...state, loading: true };

    case ADD_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        isAdded: true,
        message: action.payload.message,
      };

    case ADD_APPOINTMENT_FAIL:
      return {
        ...state,
        loading: false,
        isAdded: false,
        error: action.payload,
        errorMessage: action.payload.message,
      };
    case ADD_APPOINTMENT_RESET:
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

export const getAllAppointmentReducer = (
  state = {
    appointments: [],
  },
  action
) => {
  switch (action.type) {
    case GET_ALL_APPOINTMENT_REQUEST:
      return { ...state, loading: true };

    case GET_ALL_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        appointments: action.payload.data,
      };

    case GET_ALL_APPOINTMENT_FAIL:
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

export const getAllAppointmentByDateReducer = (
  state = {
    appointmentTimes: [],
  },
  action
) => {
  switch (action.type) {
    case GET_ALL_APPOINTMENT_BY_DATE_REQUEST:
      return { ...state, loading: true };

    case GET_ALL_APPOINTMENT_BY_DATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        appointmentTimes: action.payload.data,
      };

    case GET_ALL_APPOINTMENT_BY_DATE_FAIL:
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


export const verifyAppointmentReducer = (
  state = {
    errorMessage: "",
    message: "",
    isSuccess: false,
  },
  action
) => {
  switch (action.type) {
    case VERIFY_APPOINTMENT_REQUEST:
      return { ...state, loading: true };

    case VERIFY_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        message: action.payload.message,
      };

    case VERIFY_APPOINTMENT_FAIL:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        error: action.payload,
        errorMessage: action.payload.message,
      };
    
    default:
      return state;
  }
};

export const cancelAppointmentReducer = (
  state = {
    errorMessage: "",
    message: "",
    isSuccess: false,
  },
  action
) => {
  switch (action.type) {
    case CANCEL_APPOINTMENT_REQUEST:
      return { ...state, loading: true };

    case CANCEL_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        message: action.payload.message,
      };

    case CANCEL_APPOINTMENT_FAIL:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        error: action.payload,
        errorMessage: action.payload.message,
      };
    
    default:
      return state;
  }
};

export const changeappointmentReducer = (
  state = {
    errorMessage: "",
    message: "",
    isSuccess: false,
  },
  action
) => {
  switch (action.type) {
    case CHANGE_APPOINTMENT_REQUEST:
      return { ...state, loading: true };

    case CHANGE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        message: action.payload.message,
      };

    case CHANGE_APPOINTMENT_FAIL:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        error: action.payload,
        errorMessage: action.payload.message,
      };
    
    default:
      return state;
  }
};

const appointmentReducer = combineReducers({
  addNewAppointment: addNewAppointmentReducer,
  getAllAppointment: getAllAppointmentReducer,
  verifyAppointment : verifyAppointmentReducer,
  cancelAppointment : cancelAppointmentReducer,
  changeAppointment : changeappointmentReducer,
  getAllAppointmentByDate: getAllAppointmentByDateReducer,
});

export default appointmentReducer;
