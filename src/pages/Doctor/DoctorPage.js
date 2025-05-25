import React, { Fragment, useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import DoctorList from "../../components/List/DoctorList";
import { GetAllDoctor } from "../../redux/actions/DoctorAction";
import { ADD_DOCTOR_RESET, DELETE_DOCTOR_RESET, UPDATE_DOCTOR_RESET } from "../../redux/constants/DoctorConstants";
import { toast } from "react-toastify";
const DoctorPage = () => {
  const dispatch = useDispatch();
  const doctorUpdateDelete = useSelector(
    (state) => state.doctor.doctorUpdateDelete
  );
  const addNewDoctor = useSelector((state) => state.doctor.addNewDoctor);

  const [isShowDoctorModal, setIsShowDoctorModal] = useState(false);

  const handleShowDoctorModal = () => {
    setIsShowDoctorModal(true);
  };
  const handleCloseDoctorModal = () => {
    setIsShowDoctorModal(false);
  };

  useEffect(() => {
    dispatch(GetAllDoctor());
    if (addNewDoctor.isAdded) {
        toast.success("Başarılı bir şekilde Eklendi");
      handleCloseDoctorModal();
      dispatch({ type: ADD_DOCTOR_RESET });
    }
    if (doctorUpdateDelete.isDeleted) {
      toast.success("Başarılı bir şekilde Silindi");
      dispatch({ type: DELETE_DOCTOR_RESET });
    }
    if (doctorUpdateDelete.isUpdated) {
      toast.success("Başarılı bir şekilde Güncellendi");
      handleCloseDoctorModal();
      dispatch({ type: UPDATE_DOCTOR_RESET });
    }
  }, [
    dispatch,
    addNewDoctor.isAdded,
    doctorUpdateDelete.isDeleted,
    doctorUpdateDelete.isUpdated,
  ]);

  useEffect(() => {
    if (!addNewDoctor.isAdded && addNewDoctor.error) {
      message.error(addNewDoctor.error);
    }
  }, [dispatch, addNewDoctor.isAdded, addNewDoctor.error]);

  return (
    <Fragment>
      <MainLayout>
        <DoctorList
          isShowDoctorModal={isShowDoctorModal}
          handleShowDoctorModal={handleShowDoctorModal}
          handleCloseDoctorModal={handleCloseDoctorModal}
        />
      </MainLayout>
    </Fragment>
  );
};

export default DoctorPage;
