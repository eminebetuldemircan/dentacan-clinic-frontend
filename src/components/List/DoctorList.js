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
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Doktor Yönetimi</h1>
                <p className="mt-2 text-gray-600">
                  Doktor kayıtlarınızı kolayca yönetebilirsiniz
                </p>
              </div>
              <button
                onClick={() => {
                  setSelectedDoctor(null);
                  handleShowDoctorModal();
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Yeni Doktor Ekle
              </button>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Toplam Doktor</h3>
                <p className="mt-1 text-3xl font-semibold text-indigo-600">
                  {getAllDoctor.doctors.length}
                </p>
              </div>
              <GenericBadge count={getAllDoctor.doctors.length} />
            </div>
          </div>

          {/* Doctor List Section */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            {/* List Header */}
            <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Doktor Listesi
              </h3>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">
                  Sayfa {currentPage} / {totalPages}
                </span>
              </div>
            </div>

            {/* Loading State */}
            {getAllDoctor.loading && (
              <div className="p-8 flex justify-center">
                <LoadingSpinner />
              </div>
            )}

            {/* Empty State */}
            {!getAllDoctor.loading && currentDoctors.length === 0 && (
              <div className="p-8">
                <EmptyResult isShowAddButton={false} />
              </div>
            )}

            {/* Doctor List */}
            {!getAllDoctor.loading && currentDoctors.length > 0 && (
              <ul className="divide-y divide-gray-200">
                {currentDoctors.map((doctor, index) => (
                  <DoctorListItem
                    key={index}
                    doctor={doctor}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                ))}
              </ul>
            )}

            {/* Pagination */}
            {currentDoctors.length > 0 && (
              <div className="px-6 py-4 border-t border-gray-200">
                <ListPagination
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalPages={totalPages}
                />
              </div>
            )}
          </div>
        </div>

        {/* Doctor Modal */}
        {isShowDoctorModal && (
          <DoctorModal
            handleCloseDoctorModal={handleCloseDoctorModal}
            currentDoctor={selectedDoctor}
          />
        )}
      </div>
    </Fragment>
  );
};

export default DoctorList;