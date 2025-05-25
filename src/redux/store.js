import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import contactUsReducer from "./reducers/ContactUsReducer";
import doctorReducer from "./reducers/DoctorReducer";
import appointmentReducer from "./reducers/AppointmentReducer";

const initialState = {}

const middleware = [thunk];

const rootReducer = combineReducers({
    contactUs : contactUsReducer,
    doctor : doctorReducer,
    appointment : appointmentReducer,
});

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;