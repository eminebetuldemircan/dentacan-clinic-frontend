import moment from "moment";
import React, { Fragment } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { DeleteContactUsMessage } from "../../redux/actions/ContactUsAction";
const ContactUsMessageItem = ({ contactUsItem }) => {
    const dispatch = useDispatch();
     const handleDeleteContactUsMessage = (contactUsItemId) => {
        dispatch(DeleteContactUsMessage(contactUsItemId))
      }
  return (
    <Fragment>
      <div className="bg-white shadow-md rounded-lg p-6 mb-4 relative">
        <div className="absolute top-2 right-2 flex items-center space-x-2 text-sm text-gray-500">
          {moment(contactUsItem.createdAt).format("MMMM Do YYYY")}
          <button
            onClick={() => handleDeleteContactUsMessage(contactUsItem.id)}
            className="text-red-500 hover:text-red-700 transition-colors duration-200 mx-3"
            aria-label="Delete message"
          >
            <FaTrashAlt />
          </button>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Name</h3>
          <p className="text-gray-600">{contactUsItem.name}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Email</h3>
          <p className="text-gray-600">{contactUsItem.email}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Message</h3>
          <p className="text-gray-600">{contactUsItem.noteMessage}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactUsMessageItem;
