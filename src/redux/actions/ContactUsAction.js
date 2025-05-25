import axios from "axios";
import { DELETE_CONTACT_US_MESSAGE_FAIL, DELETE_CONTACT_US_MESSAGE_REQUEST, DELETE_CONTACT_US_MESSAGE_SUCCESS, GET_ALL_CONTACT_US_MESSAGE_FAIL, GET_ALL_CONTACT_US_MESSAGE_REQUEST, GET_ALL_CONTACT_US_MESSAGE_SUCCESS, SEND_MESSAGE_FAIL, SEND_MESSAGE_REQUEST, SEND_MESSAGE_SUCCESS } from "../constants/ContactUsConstants";


export const AddNewContactUsMessage = (contactUsMessage) => async (dispatch) => {
    try {
      dispatch({
        type: SEND_MESSAGE_REQUEST,
      });

      const { data } = await axios.post(
        `https://localhost:44332/api/ContactUses/AddNewContactUs`,contactUsMessage
      );
  
      dispatch({
        type: SEND_MESSAGE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SEND_MESSAGE_FAIL,
        payload: error.response.data,
      });
    }
  };

  export const GetAllContactUsMessage = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_CONTACT_US_MESSAGE_REQUEST,
      });
  
      const { data } = await axios.get(`https://localhost:44332/api/ContactUses/GetAllContactUs`);
 
  
      dispatch({
        type: GET_ALL_CONTACT_US_MESSAGE_SUCCESS,
        payload: data,
      });
    } catch (error) {
        const errorMessage = error.response?.data?.message || "An error occurred";
      dispatch({
        type: GET_ALL_CONTACT_US_MESSAGE_FAIL,
        error: errorMessage,
      });
    }
  };



   export const DeleteContactUsMessage = (contactUsId) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_CONTACT_US_MESSAGE_REQUEST,
      });
  
      const { data } = await axios.delete(`https://localhost:44332/api/ContactUses/DeleteContactUs/${contactUsId}`);
  
      dispatch({
        type: DELETE_CONTACT_US_MESSAGE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_CONTACT_US_MESSAGE_FAIL,
        error: error.response,
      });
    }
  };
  
