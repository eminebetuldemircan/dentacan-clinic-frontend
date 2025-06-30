import React, { Fragment, useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { ToastContainer, toast } from "react-toastify";
import ContactUsMessageList from "../../components/List/ContactUsMessageList";
import { useDispatch, useSelector } from "react-redux";
import { GetAllContactUsMessage } from "../../redux/actions/ContactUsAction";
import { DELETE_CONTACT_US_MESSAGE_RESET } from "../../redux/constants/ContactUsConstants";

const ContactUsMessagesPage = () => {
  const dispatch = useDispatch();
  const deleteContactUsMessage = useSelector(
      (state) => state.contactUs.deleteContactUsMessage
    );
  useEffect(() => {
     window.scrollTo(0, 0); // Sayfanın en üstüne kaydırır
    dispatch(GetAllContactUsMessage());
    if (deleteContactUsMessage.isDeleted) {
      toast.success("Başarılı bir şekilde silindi");
      dispatch({
        type: DELETE_CONTACT_US_MESSAGE_RESET,
      });
    }
  }, [dispatch,deleteContactUsMessage.isDeleted]);

  return (
    <Fragment>
      <MainLayout>
        <ContactUsMessageList />
      </MainLayout>
    </Fragment>
  );
};

export default ContactUsMessagesPage;
