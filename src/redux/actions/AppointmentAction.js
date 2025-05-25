import axios from "axios";
import {
  ADD_APPOINTMENT_FAIL,
  ADD_APPOINTMENT_REQUEST,
  ADD_APPOINTMENT_SUCCESS,
  DELETE_APPOINTMENT_FAIL,
  DELETE_APPOINTMENT_REQUEST,
  DELETE_APPOINTMENT_SUCCESS,
  GET_ALL_APPOINTMENT_FAIL,
  GET_ALL_APPOINTMENT_REQUEST,
  GET_ALL_APPOINTMENT_SUCCESS,
  UPDATE_APPOINTMENT_FAIL,
  UPDATE_APPOINTMENT_REQUEST,
  UPDATE_APPOINTMENT_SUCCESS,
  VERIFY_APPOINTMENT_FAIL,
  VERIFY_APPOINTMENT_REQUEST,
  VERIFY_APPOINTMENT_SUCCESS,
  CANCEL_APPOINTMENT_REQUEST,
CANCEL_APPOINTMENT_SUCCESS,
  CANCEL_APPOINTMENT_FAIL,
  CHANGE_APPOINTMENT_REQUEST,
  CHANGE_APPOINTMENT_SUCCESS,
  CHANGE_APPOINTMENT_FAIL,
  GET_ALL_APPOINTMENT_BY_DATE_REQUEST,
  GET_ALL_APPOINTMENT_BY_DATE_SUCCESS,
  GET_ALL_APPOINTMENT_BY_DATE_FAIL

} from "../constants/AppointmentConstants";





export const AddNewAppointment = (appointment) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_APPOINTMENT_REQUEST,
    });

    const { data } = await axios.post(
      `https://localhost:44332/api/Appointments/AddNewAppointment`, appointment
    );

    dispatch({
      type: ADD_APPOINTMENT_SUCCESS,
      payload: data,
    });
    dispatch({
      type: ADD_APPOINTMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred";
    dispatch({
      type: ADD_APPOINTMENT_FAIL,
      payload: errorMessage
    });
  }
};


export const GetAllAppointment = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_APPOINTMENT_REQUEST,
    });

    const { data } = await axios.get(`https://localhost:44332/api/Appointments/GetAllAppointment`);

    dispatch({
      type: GET_ALL_APPOINTMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_APPOINTMENT_FAIL,
      error: error.response,
    });
  }
};

export const GetAllAppointmentByDate = (date,doctorId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_APPOINTMENT_BY_DATE_REQUEST,
    });

    const { data } = await axios.get(`https://localhost:44332/api/Appointments/GetAllAppointmentByDateAndDoctor?date=${date}&doctorId=${doctorId}`);

    dispatch({
      type: GET_ALL_APPOINTMENT_BY_DATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_APPOINTMENT_BY_DATE_FAIL,
      error: error.response,
    });
  }
};


export const UpdateAppointment = (appointment) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_APPOINTMENT_REQUEST,
    });

    const { data } = await axios.put(
      `https://localhost:44332/api/Appointments/UpdateAppointment`, appointment, {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    dispatch({
      type: UPDATE_APPOINTMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred";
    dispatch({
      type: UPDATE_APPOINTMENT_FAIL,
      error: errorMessage,
    });
  }
};

export const DeleteAppointment = (appointmentId) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_APPOINTMENT_REQUEST,
    });

    const { data } = await axios.delete(`https://localhost:44332/api/Appointments/DeleteAppointment/${appointmentId}`);

    dispatch({
      type: DELETE_APPOINTMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred";
    dispatch({
      type: DELETE_APPOINTMENT_FAIL,
      error: errorMessage,
    });
  }
};

export const VerifyAppointment = (appointmentId,verificationCode) => async (dispatch) => {
  try {
    dispatch({
      type: VERIFY_APPOINTMENT_REQUEST,
    });

    const { data } = await axios.put(
      `https://localhost:44332/api/Appointments/VerificationAppointment/${appointmentId}?verificationCode=${verificationCode}`, 
    );

    dispatch({
      type: VERIFY_APPOINTMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred";
    dispatch({
      type: VERIFY_APPOINTMENT_FAIL,
      error: errorMessage,
    });
  }
};
export const CancelAppointment = (appointmentId) => async (dispatch) => {
  try {
    dispatch({
      type: CANCEL_APPOINTMENT_REQUEST,
    });

    const { data } = await axios.put(
      `https://localhost:44332/api/Appointments/CancelAppointment/${appointmentId}`, 
 
    );

    dispatch({
      type: CANCEL_APPOINTMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred";
    dispatch({
      type: CHANGE_APPOINTMENT_FAIL,
      error: errorMessage,
    });
  }
};

export const ChangeAppointment = (token) => async (dispatch) => {
  try {
    dispatch({
      type: CHANGE_APPOINTMENT_REQUEST,
    });
debugger
    const { data } = await axios.put(
      `https://localhost:44332/api/Appointments/ChangeAppointment?token=${token}`,
    );

    dispatch({
      type: CHANGE_APPOINTMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred";
    dispatch({
      type: CHANGE_APPOINTMENT_FAIL,
      error: errorMessage,
    });
  }
};
