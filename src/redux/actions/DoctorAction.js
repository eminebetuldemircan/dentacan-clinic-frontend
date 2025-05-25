import axios from "axios";
import {
  ADD_DOCTOR_FAIL,
  ADD_DOCTOR_REQUEST,
  ADD_DOCTOR_SUCCESS,
  DELETE_DOCTOR_FAIL,
  DELETE_DOCTOR_REQUEST,
  DELETE_DOCTOR_SUCCESS,
  GET_ALL_DOCTOR_FAIL,
  GET_ALL_DOCTOR_REQUEST,
  GET_ALL_DOCTOR_SUCCESS,
  UPDATE_DOCTOR_FAIL,
  UPDATE_DOCTOR_REQUEST,
  UPDATE_DOCTOR_SUCCESS,
} from "../constants/DoctorConstants";





export const AddNewDoctor = (doctor) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_DOCTOR_REQUEST,
    });

    const { data } = await axios.post(
      `https://localhost:44332/api/Doctors/AddNewDoctor`,doctor
    );

    dispatch({
      type: ADD_DOCTOR_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred";
    dispatch({
      type: ADD_DOCTOR_FAIL,
      payload: errorMessage
    });
  }
};


export const GetAllDoctor = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_DOCTOR_REQUEST,
    });

    const { data } = await axios.get(`https://localhost:44332/api/Doctors/GetAllDoctor`);

    dispatch({
      type: GET_ALL_DOCTOR_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_DOCTOR_FAIL,
      error: error.response,
    });
  }
};


export const UpdateDoctor = (doctor) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_DOCTOR_REQUEST,
    });

    const { data } = await axios.put(
      `https://localhost:44332/api/Doctors/UpdateDoctor`,doctor,{
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    dispatch({
      type: UPDATE_DOCTOR_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred";
    dispatch({
      type: UPDATE_DOCTOR_FAIL,
      error: errorMessage,
    });
  }
};

export const DeleteDoctor = (doctorId) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_DOCTOR_REQUEST,
    });

    const { data } = await axios.delete(`https://localhost:44332/api/Doctors/DeleteDoctor/${doctorId}`);

    dispatch({
      type: DELETE_DOCTOR_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred";
    dispatch({
      type: DELETE_DOCTOR_FAIL,
      error: errorMessage,
    });
  }
};
