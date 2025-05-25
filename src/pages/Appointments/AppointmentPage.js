import React, { Fragment, useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import GenericTable from "../../components/Table/GenericTable";
import { appointmentColumns } from "../../components/Table/TableColumns";
import { useDispatch, useSelector } from "react-redux";
import { GetAllAppointment } from "../../redux/actions/AppointmentAction";
import { FiCalendar, FiClock, FiUser, FiFilter, FiPlus } from "react-icons/fi";
import { DatePicker, Select, Button } from "antd";

const { Option } = Select;

const AppointmentPage = () => {
  const dispatch = useDispatch();
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedDate, setSelectedDate] = useState(null);

  const getAllAppointment = useSelector(
    (state) => state.appointment.getAllAppointment
  );

  useEffect(() => {
    dispatch(GetAllAppointment());
  }, [dispatch]);

  const filteredAppointments = getAllAppointment.appointments?.filter(app => {
    const matchesStatus = filterStatus === "all" || app.status === filterStatus;
    const matchesDate = !selectedDate || 
      new Date(app.date).toDateString() === selectedDate.toDateString();
    return matchesStatus && matchesDate;
  });
const statusCounts = getAllAppointment.appointments?.reduce((acc, app) => {
  // Toplam randevu sayısı
  acc.total = (acc.total || 0) + 1;
  if (app.isVerification === true) {
    acc.verified = (acc.verified || 0) + 1;
  } else {
    acc.unverified = (acc.unverified || 0) + 1;
  }
  return acc;

}, {});

  return (
    <MainLayout>
      <div className="px-6 py-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 flex items-center">
              Randevu Yönetimi
            </h1>
            <p className="mt-2 text-gray-600">
              Tüm randevularınızı buradan görüntüleyebilir ve yönetebilirsiniz.
            </p>
          </div>
          <Button 
            type="primary" 
            icon={<FiPlus className="mr-2" />}
            className="mt-4 md:mt-0"
            href="/randevu-al"
          >
            Yeni Randevu Ekle
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500">
            <div className="text-gray-500 text-sm">Toplam Randevu</div>
            <div className="text-2xl font-bold text-gray-800">
              {statusCounts?.total || 0}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500">
            <div className="text-gray-500 text-sm">Doğrulanan Randevular</div>
            <div className="text-2xl font-bold text-gray-800">
              {statusCounts?.verified || 0}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-yellow-500">
            <div className="text-gray-500 text-sm">Doğrulanmayan Randevular</div>
            <div className="text-2xl font-bold text-gray-800">
              {statusCounts?.unverified || 0}
            </div>
          </div>
        
        </div>


        {/* Table Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <GenericTable
            showDeleteButton={false}
            columns={appointmentColumns}
            dataSource={filteredAppointments || []}
            loading={getAllAppointment.loading}
            tableWidth="100%"
            showClearFilter={false}
            rowClassName={(record) => {
              switch (record.status) {
                case 'confirmed':
                  return 'bg-green-50 hover:bg-green-100';
                case 'pending':
                  return 'bg-yellow-50 hover:bg-yellow-100';
                case 'cancelled':
                  return 'bg-red-50 hover:bg-red-100';
                default:
                  return 'hover:bg-gray-50';
              }
            }}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default AppointmentPage;