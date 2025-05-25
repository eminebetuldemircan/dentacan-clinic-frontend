import React, { Fragment, useState } from "react";
import GenericBadge from "../Badge/GenericBadge";
import LoadingSpinner from "../Spinner/LoadingSpinner";
import EmptyResult from "../result/EmptyResult";
import ListPagination from "../Pagination/ListPagination";
import { useDispatch, useSelector } from "react-redux";
import DoctorListItem from "./DoctorListItem";
import { DeleteDoctor } from "../../redux/actions/DoctorAction";
import DoctorModal from "../Modal/DoctorModal";

const ITEMS_PER_PAGE = 5;
const DoctorList = ({
  isShowDoctorModal,
  handleShowDoctorModal,
  handleCloseDoctorModal,
}) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const getAllDoctor = useSelector((state) => state.doctor.getAllDoctor);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentDoctors = getAllDoctor.doctors.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(getAllDoctor.doctors.length / ITEMS_PER_PAGE);

  const handleDelete = (id) => {
    dispatch(DeleteDoctor(id));
  };

  const handleEdit = (doctor) => {
    setSelectedDoctor(doctor);
    handleShowDoctorModal();
  };
  return (
    <Fragment>
      <div className="min-h-[1024px] bg-white">
        <div className="min-h-full">
          <main className="pt-8 pb-16">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="px-4 sm:px-0 flex justify-between items-center">
                <div className="inline-flex items-center space-x-2">
                  <h2 className="text-lg font-medium text-gray-900">Doctors</h2>
                  <GenericBadge count={getAllDoctor.doctors.length} />
                </div>
                <button
                  onClick={() => {
                    setSelectedDoctor(null);
                    handleShowDoctorModal();
                  }}
                  className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                >
                  Doktor Ekle
                </button>
                {isShowDoctorModal && (
                  <DoctorModal
                    handleCloseDoctorModal={handleCloseDoctorModal}
                    currentDoctor={selectedDoctor}
                  />
                )}
              </div>

              <ul
                role="list"
                className="mt-5 divide-y divide-gray-200 border-t border-gray-200 sm:mt-0 sm:border-t-0"
              >
                {getAllDoctor.loading ? (
                  <LoadingSpinner />
                ) : !getAllDoctor.loading && currentDoctors.length === 0 ? (
                  <EmptyResult isShowAddButton={false} />
                ) : (
                  currentDoctors.map((doctor, index) => (
                    <DoctorListItem
                      key={index}
                      doctor={doctor}
                      handleDelete={handleDelete}
                      handleEdit={handleEdit}
                    />
                  ))
                )}
              </ul>

              {currentDoctors.length !== 0 && (
                <ListPagination
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalPages={totalPages}
                />
              )}
            </div>
          </main>
        </div>
      </div>
    </Fragment>
  );
};

export default DoctorList;
