import { Col, Row } from 'antd';
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import GenericModal from './GenericModal';
import { AddNewDoctor, UpdateDoctor } from '../../redux/actions/DoctorAction';
import DoctorForm from '../Form/DoctorForm';
const DoctorModal = ({handleCloseDoctorModal,currentDoctor}) => {

    const doctorInitialState = {
        firstname: "",
        lastname: "",
        title: "",
        specialization: "",
        phoneNumber: "",
        email: ""
      }
    
      const [formState, setFormState] = useState(doctorInitialState);
    
      const setFormStateField = (field, value) => {
        setFormState((prevState) => ({
          ...prevState,
          [field]: value,
        }));
      };


      const dispatch = useDispatch();

      useEffect(() => {
        if (currentDoctor) {
          setFormState({
            firstname: currentDoctor.firstname,
            lastname: currentDoctor.lastname,
            title: currentDoctor.title,
            specialization: currentDoctor.specialization,
            phoneNumber : currentDoctor.phoneNumber,
            email: currentDoctor.email
          });
        } else {
          setFormState(doctorInitialState);
        }
      }, [currentDoctor]);
    
    
      const handleSaveDoctor = () => {
        // if (!DoctorValidateForm(formState)) return;
    
        dispatch(AddNewDoctor(formState));
      };
    
      const handleUpdateDoctor = () => {
        // if (!DoctorValidateForm(formState)) return;

        dispatch(UpdateDoctor({ ...formState, id: currentDoctor.id }));
      };
  return (
      <Fragment>
      <GenericModal
        closeModal={handleCloseDoctorModal}
        title={currentDoctor ? "Doktoru Güncelle" : "Doktor Ekle"}
        description="Lütfen doktor bilgilerini doldurunuz."
        widthClassName="w-1/3 py-2 px-2  bg-neutral-50 border border-neutral-100 rounded-xl"
         onSave={currentDoctor ? handleUpdateDoctor : handleSaveDoctor}
        saveLabel={"Kaydet"}
      >
    
          <Row gutter={[16, 16]} justify="center">
            <Col xs={24} md={24} className="w-full ">
              <DoctorForm
                formState={formState}
                setFormStateField={setFormStateField}
              />
            </Col>
          </Row>
    
      </GenericModal>
    </Fragment>
  )
}

export default DoctorModal