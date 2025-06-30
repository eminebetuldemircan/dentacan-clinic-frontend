import React, { Fragment, useEffect, useState } from 'react';
import { 
  FaBars, 
  FaSearch, 
  FaBell, 
  FaEnvelope, 
  FaUser, 
  FaUserPlus, 
  FaChartBar, 
  FaFileAlt, 
  FaMoneyBillWave, 
  FaCalendarAlt, 
  FaCalendarPlus,
  FaComment,
  FaSignOutAlt,
  FaEdit,
  FaTrash,
  FaFileDownload,
  FaFileAlt as FaFile,
  FaChevronDown,
  FaChevronUp,
  FaFilter
} from 'react-icons/fa';
import { FiEdit2, FiPlus, FiTrash2 } from 'react-icons/fi';
import GenericTable from '../../components/Table/GenericTable';
import { useDispatch, useSelector } from 'react-redux';
import { appointmentColumns } from '../../components/Table/TableColumns';
import { Button, message } from 'antd';
import { GetAllAppointment } from '../../redux/actions/AppointmentAction';
import ContactUsMessageList from '../../components/List/ContactUsMessageList';
import { DELETE_CONTACT_US_MESSAGE_RESET } from '../../redux/constants/ContactUsConstants';
import { GetAllContactUsMessage } from '../../redux/actions/ContactUsAction';
import { toast } from 'react-toastify';
import DoctorModal from '../../components/Modal/DoctorModal';
import { ADD_DOCTOR_RESET, DELETE_DOCTOR_RESET, UPDATE_DOCTOR_RESET } from '../../redux/constants/DoctorConstants';
import { GetAllDoctor } from '../../redux/actions/DoctorAction';
import DoctorList from '../../components/List/DoctorList';

// Main Component
const DentacanAdminPanel = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch(activeTab) {
      case 'account':
        return <AccountContent />;
      case 'add-doctor':
        return <AddDoctorContent />;
      case 'statistics':
        return <StatisticsContent />;
      case 'reports':
        return <ReportsContent />;
      case 'payment':
        return <PaymentContent />;
      case 'appointments':
        return <AppointmentsContent />;
      case 'add-appointment':
        return <AddAppointmentContent />;
      case 'messages':
        return <MessagesContent />;      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="dentacan-admin">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarActive ? 'active' : ''}`}>
        <div className="sidebar-brand">
          <span>Dentacan</span>
        </div>
        
        <div className="sidebar-menu">
          <a href="#" className={`menu-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
            <FaUser />
            <span>Dashboard</span>
          </a>
          
          <div className="menu-title">Yönetim</div>
          <a href="#" className={`menu-item ${activeTab === 'account' ? 'active' : ''}`} onClick={() => setActiveTab('account')}>
            <FaUser />
            <span>Hesabım</span>
          </a>
          <a href="#" className={`menu-item ${activeTab === 'add-doctor' ? 'active' : ''}`} onClick={() => setActiveTab('add-doctor')}>
            <FaUserPlus />
            <span>Doktor Ekle</span>
          </a>
          
          <div className="menu-title">Raporlar</div>
          <a href="#" className={`menu-item ${activeTab === 'statistics' ? 'active' : ''}`} onClick={() => setActiveTab('statistics')}>
            <FaChartBar />
            <span>İstatistikler</span>
          </a>
          <a href="#" className={`menu-item ${activeTab === 'reports' ? 'active' : ''}`} onClick={() => setActiveTab('reports')}>
            <FaFileAlt />
            <span>Raporlar</span>
          </a>
          <a href="#" className={`menu-item ${activeTab === 'payment' ? 'active' : ''}`} onClick={() => setActiveTab('payment')}>
            <FaMoneyBillWave />
            <span>Ödeme Al</span>
          </a>
          
          <div className="menu-title">Randevular</div>
          <a href="#" className={`menu-item ${activeTab === 'appointments' ? 'active' : ''}`} onClick={() => setActiveTab('appointments')}>
            <FaCalendarAlt />
            <span>Randevularım</span>
          </a>
          <a href="#" className={`menu-item ${activeTab === 'add-appointment' ? 'active' : ''}`} onClick={() => setActiveTab('add-appointment')}>
            <FaCalendarPlus />
            <span>Randevu Ekle</span>
          </a>
          <a href="#" className={`menu-item ${activeTab === 'messages' ? 'active' : ''}`} onClick={() => setActiveTab('messages')}>
            <FaComment />
            <span>Gelen Mesajlar</span>
          </a>
          
          <div className="menu-title">Sistem</div>
          <a href="#" className="menu-item">
            <FaSignOutAlt />
            <span>Çıkış</span>
          </a>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        {/* Topbar */}
        <div className="topbar">
          <button className="toggle-btn" onClick={() => setSidebarActive(!sidebarActive)}>
            <FaBars />
          </button>
          
          <div className="search-bar">
            <FaSearch />
            <input type="text" placeholder="Ara..." />
          </div>
          
          <div className="topbar-actions">
            <button className="notification-btn">
              <FaBell />
              <span className="notification-badge">5</span>
            </button>
            
            <button className="user-menu-btn">
              <FaEnvelope />
            </button>
            
            <div className="user-initials">DC</div>
          </div>
        </div>
        
        {/* Content Wrapper */}
        <div className="content-wrapper">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

// Content Components
const DashboardContent = () => (
  <>
    <div className="page-header">
      <h1 className="page-title">Dashboard</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Anasayfa</a></li>
          <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
        </ol>
      </nav>
    </div>
    
    <div className="stats-grid">
      <StatCard 
        icon={<FaCalendarAlt />}
        title="Bugünkü Randevular"
        value="24"
        change="3"
        isUp={true}
        color="primary"
      />
      
      <StatCard 
        icon={<FaUser />}
        title="Yeni Hastalar"
        value="8"
        change="2"
        isUp={true}
        color="blue"
      />
      
      <StatCard 
        icon={<FaChartBar />}
        title="Doluluk Oranı"
        value="82%"
        change="5"
        isUp={true}
        color="green"
      />
      
      <StatCard 
        icon={<FaMoneyBillWave />}
        title="Bugünkü Gelir"
        value="₺5,420"
        change="12"
        isUp={true}
        color="orange"
      />
    </div>
    
    <div className="dashboard-grid">
      
      
    </div>
  </>
);

const AccountContent = () => (
  <div className="page-content">
    <div className="page-header">
      <h1 className="page-title">Hesabım</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Anasayfa</a></li>
          <li className="breadcrumb-item active" aria-current="page">Hesabım</li>
        </ol>
      </nav>
    </div>
    
    <div className="account-settings">
      <div className="settings-card">
        <div className="settings-header">
          <h2>Profil Bilgileri</h2>
          <button className="edit-btn">Düzenle</button>
        </div>
        <div className="settings-content">
          <div className="profile-info">
            <div className="profile-avatar">
              <div className="avatar-initials">DC</div>
            </div>
            <div className="profile-details">
              <div className="detail-row">
                <span className="detail-label">Ad Soyad:</span>
                <span className="detail-value">Dentacan Admin</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Email:</span>
                <span className="detail-value">admin@dentacan.com</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Telefon:</span>
                <span className="detail-value">+90 555 123 4567</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Rol:</span>
                <span className="detail-value">Yönetici</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="settings-card">
        <div className="settings-header">
          <h2>Güvenlik Ayarları</h2>
        </div>
        <div className="settings-content">
          <div className="security-item">
            <div>
              <h3>Şifre Değiştir</h3>
              <p>Son değişiklik: 3 ay önce</p>
            </div>
            <button className="change-btn">Değiştir</button>
          </div>
          <div className="security-item">
            <div>
              <h3>İki Adımlı Doğrulama</h3>
              <p>Şu anda aktif değil</p>
            </div>
            <button className="enable-btn">Aktif Et</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AddDoctorContent = () => {
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
      <DoctorList
          isShowDoctorModal={isShowDoctorModal}
          handleShowDoctorModal={handleShowDoctorModal}
          handleCloseDoctorModal={handleCloseDoctorModal}
        />
  </Fragment>
  );
};

const StatisticsContent = () => (
  <div className="page-content">
    <div className="page-header">
      <h1 className="page-title">İstatistikler</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Anasayfa</a></li>
          <li className="breadcrumb-item active" aria-current="page">İstatistikler</li>
        </ol>
      </nav>
    </div>
    
    <div className="stats-filters">
      <div className="filter-group">
        <label>Zaman Aralığı:</label>
        <select className="filter-select">
          <option>Son 7 Gün</option>
          <option>Son 30 Gün</option>
          <option>Bu Ay</option>
          <option>Bu Yıl</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Klinik:</label>
        <select className="filter-select">
          <option>Tüm Klinikler</option>
          <option>Merkez Klinik</option>
          <option>Şube 1</option>
        </select>
      </div>
      <button className="filter-btn">
        <FaFilter className="mr-2" />
        Filtrele
      </button>
    </div>
    
    <div className="stats-charts">
      <ChartCard title="Randevu İstatistikleri">
        <div className="chart-placeholder">
          <p>Randevu grafikleri burada gösterilecek</p>
        </div>
      </ChartCard>
      
      <div className="chart-grid">
        <ChartCard title="Hasta Demografisi">
          <div className="chart-placeholder">
            <p>Hasta demografi grafikleri burada gösterilecek</p>
          </div>
        </ChartCard>
        <ChartCard title="Gelir İstatistikleri">
          <div className="chart-placeholder">
            <p>Gelir grafikleri burada gösterilecek</p>
          </div>
        </ChartCard>
      </div>
    </div>
  </div>
);

const ReportsContent = () => (
  <div className="page-content">
    <div className="page-header">
      <h1 className="page-title">Raporlar</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Anasayfa</a></li>
          <li className="breadcrumb-item active" aria-current="page">Raporlar</li>
        </ol>
      </nav>
    </div>
    
    <div className="reports-actions">
      <button className="report-btn">
        <FaFileAlt className="mr-2" />
        Günlük Rapor
      </button>
      <button className="report-btn">
        <FaFileAlt className="mr-2" />
        Aylık Rapor
      </button>
      <button className="report-btn">
        <FaFileAlt className="mr-2" />
        Finansal Rapor
      </button>
    </div>
    
    <div className="reports-list">
      <div className="report-card">
        <div className="report-icon">
          <FaFile />
        </div>
        <div className="report-info">
          <h3>Haziran 2023 Finansal Raporu</h3>
          <p>Oluşturulma: 01 Tem 2023</p>
        </div>
        <div className="report-actions">
          <button className="download-btn">
            <FaFileDownload className="mr-1" />
            İndir
          </button>
          <button className="view-btn">Görüntüle</button>
        </div>
      </div>
      
      <div className="report-card">
        <div className="report-icon">
          <FaFile />
        </div>
        <div className="report-info">
          <h3>Mayıs 2023 Randevu Raporu</h3>
          <p>Oluşturulma: 01 Haz 2023</p>
        </div>
        <div className="report-actions">
          <button className="download-btn">
            <FaFileDownload className="mr-1" />
            İndir
          </button>
          <button className="view-btn">Görüntüle</button>
        </div>
      </div>
    </div>
  </div>
);

const PaymentContent = () => (
  <div className="page-content">
    <div className="page-header">
      <h1 className="page-title">Ödeme İşlemleri</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Anasayfa</a></li>
          <li className="breadcrumb-item active" aria-current="page">Ödeme İşlemleri</li>
        </ol>
      </nav>
    </div>
    
    <div className="payment-container">
      <div className="payment-form">
        <h2>Yeni Ödeme Al</h2>
        <form>
          <div className="form-group">
            <label>Hasta Seçin</label>
            <select className="form-control">
              <option>Hasta seçin</option>
              <option>Ahmet Yılmaz</option>
              <option>Mehmet Kaya</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Randevu Seçin (Opsiyonel)</label>
            <select className="form-control">
              <option>Randevu seçin</option>
              <option>15 Haz - Dolgu</option>
              <option>20 Haz - Temizlik</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Ödeme Tutarı (₺)</label>
            <input type="number" className="form-control" placeholder="0,00" />
          </div>
          
          <div className="form-group">
            <label>Ödeme Yöntemi</label>
            <select className="form-control">
              <option>Nakit</option>
              <option>Kredi Kartı</option>
              <option>Banka Transferi</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Açıklama</label>
            <textarea className="form-control" rows="3"></textarea>
          </div>
          
          <button type="submit" className="btn-payment">
            <FaMoneyBillWave className="mr-2" />
            Ödeme Al
          </button>
        </form>
      </div>
      
      <div className="payment-history">
        <h2>Son Ödemeler</h2>
        <div className="payment-list">
          <div className="payment-item">
            <div className="payment-info">
              <h3>Ahmet Yılmaz</h3>
              <p>15 Haz - Dolgu</p>
              <span className="payment-date">15 Haz 2023, 14:30</span>
            </div>
            <div className="payment-amount">
              ₺450,00
            </div>
          </div>
          
          <div className="payment-item">
            <div className="payment-info">
              <h3>Mehmet Kaya</h3>
              <p>14 Haz - Temizlik</p>
              <span className="payment-date">14 Haz 2023, 10:15</span>
            </div>
            <div className="payment-amount">
              ₺300,00
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AppointmentsContent = () => {
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
 )
}
  
 

const AddAppointmentContent = () => (
  <div className="page-content">
    <div className="page-header">
      <h1 className="page-title">Yeni Randevu</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Anasayfa</a></li>
          <li className="breadcrumb-item"><a href="#">Randevular</a></li>
          <li className="breadcrumb-item active" aria-current="page">Yeni Randevu</li>
        </ol>
      </nav>
    </div>
    
    <div className="appointment-form">
      <form>
        <div className="form-row">
          <div className="form-group">
            <label>Hasta</label>
            <select className="form-control">
              <option>Hasta seçin</option>
              <option>Ahmet Yılmaz</option>
              <option>Mehmet Kaya</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Doktor</label>
            <select className="form-control">
              <option>Doktor seçin</option>
              <option>Dr. Ayşe Demir</option>
              <option>Dr. Ahmet Can</option>
            </select>
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>Tarih</label>
            <input type="date" className="form-control" />
          </div>
          
          <div className="form-group">
            <label>Saat</label>
            <input type="time" className="form-control" />
          </div>
        </div>
        
        <div className="form-group">
          <label>İşlem Türü</label>
          <select className="form-control">
            <option>İşlem seçin</option>
            <option>Kontrol</option>
            <option>Diş Temizliği</option>
            <option>Dolgu</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Açıklama</label>
          <textarea className="form-control" rows="3"></textarea>
        </div>
        
        <div className="form-actions">
          <button type="button" className="btn-cancel">İptal</button>
          <button type="submit" className="btn-submit">Randevu Oluştur</button>
        </div>
      </form>
    </div>
  </div>
);

const MessagesContent = () =>{
 const dispatch = useDispatch();
  const deleteContactUsMessage = useSelector(
      (state) => state.contactUs.deleteContactUsMessage
    );
  useEffect(() => {
    dispatch(GetAllContactUsMessage());
    if (deleteContactUsMessage.isDeleted) {
      toast.success("Başarılı bir şekilde silindi");
      dispatch({
        type: DELETE_CONTACT_US_MESSAGE_RESET,
      });
    }
  }, [dispatch,deleteContactUsMessage.isDeleted]);
  return (
<ContactUsMessageList />
  )
}
  


const UpcomingAppointmentsContent = () => (
  <div className="page-content">
    <h1>Gelecek Randevularım</h1>
    <p>Gelecekteki randevuların listesi burada yer alacak.</p>
  </div>
);

const PastAppointmentsContent = () => (
  <div className="page-content">
    <h1>Geçmiş Randevularım</h1>
    <p>Geçmiş randevuların listesi burada yer alacak.</p>
  </div>
);

const ActiveAppointmentsContent = () => (
  <div className="page-content">
    <h1>Aktif Randevular</h1>
    <p>Aktif randevuların listesi burada yer alacak.</p>
  </div>
);

const PendingAppointmentsContent = () => (
  <div className="page-content">
    <h1>Bekleyen Randevular</h1>
    <p>Onay bekleyen randevuların listesi burada yer alacak.</p>
  </div>
);

const DeletedAppointmentsContent = () => (
  <div className="page-content">
    <h1>Silinen Randevular</h1>
    <p>Silinen randevuların listesi burada yer alacak.</p>
  </div>
);

// Helper Components
const StatCard = ({ icon, title, value, change, isUp, color }) => {
  return (
    <div className={`stat-card ${color}`}>
      <div className="stat-title">
        {icon}
        <span>{title}</span>
      </div>
      <div className="stat-value">{value}</div>
      <div className={`stat-change ${isUp ? 'up' : 'down'}`}>
        {isUp ? <FaChevronUp /> : <FaChevronDown />} {change}%
      </div>
    </div>
  );
};

const ChartCard = ({ title, children }) => {
  return (
    <div className="chart-card">
      <div className="card-header">
        <h2 className="card-title">{title}</h2>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

const QuickAction = ({ icon, label }) => {
  return (
    <button className="action-btn">
      {icon}
      <span>{label}</span>
    </button>
  );
};


 

// Styles (CSS-in-JS example - you might want to move this to a separate CSS file)
const styles = `
  .dentacan-admin {
    display: flex;
    min-height: 100vh;
    background-color: #f5f7fb;
  }

  /* Sidebar Styles */
  .sidebar {
    width: 250px;
    background: #2a3042;
    color: #fff;
    transition: all 0.3s;
    position: relative;
    z-index: 10;
  }

  .sidebar.active {
    margin-left: -250px;
  }

  .sidebar-brand {
    padding: 20px;
    font-size: 1.5rem;
    font-weight: bold;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .sidebar-menu {
    padding: 20px 0;
  }

  .menu-title {
    padding: 10px 20px;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.5);
  }

  .menu-item {
    display: flex;
    align-items: center;
    padding: 12px 20px;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: all 0.3s;
  }

  .menu-item:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
  }

  .menu-item.active {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    border-left: 3px solid #4caf50;
  }

  .menu-item svg {
    margin-right: 10px;
    font-size: 1rem;
  }

  /* Main Content Styles */
  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  /* Topbar Styles */
  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 25px;
    background: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    position: sticky;
    top: 0;
    z-index: 5;
  }

  .toggle-btn {
    background: none;
    border: none;
    font-size: 1.25rem;
    color: #555;
    cursor: pointer;
  }

  .search-bar {
    display: flex;
    align-items: center;
    background: #f5f7fb;
    padding: 8px 15px;
    border-radius: 20px;
    width: 300px;
  }

  .search-bar svg {
    color: #888;
    margin-right: 10px;
  }

  .search-bar input {
    border: none;
    background: transparent;
    outline: none;
    width: 100%;
  }

  .topbar-actions {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .notification-btn {
    position: relative;
    background: none;
    border: none;
    color: #555;
    font-size: 1.1rem;
    cursor: pointer;
  }

  .notification-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background: #f44336;
    color: white;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    font-size: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .user-menu-btn {
    background: none;
    border: none;
    color: #555;
    font-size: 1.1rem;
    cursor: pointer;
  }

  .user-initials {
    width: 35px;
    height: 35px;
    background: #4caf50;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }

  /* Content Wrapper */
  .content-wrapper {
    flex: 1;
    padding: 25px;
    background: #f5f7fb;
  }

  /* Page Header */
  .page-header {
    margin-bottom: 25px;
  }

  .page-title {
    font-size: 1.75rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 10px;
  }

  .breadcrumb {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 0.9rem;
    color: #666;
  }

  .breadcrumb-item + .breadcrumb-item::before {
    content: "/";
    padding: 0 8px;
  }

  .breadcrumb-item a {
    color: #666;
    text-decoration: none;
  }

  .breadcrumb-item.active {
    color: #4caf50;
  }

  /* Stats Grid */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-bottom: 25px;
  }

  .stat-card {
    background: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    position: relative;
    overflow: hidden;
  }

  .stat-card.primary {
    border-left: 4px solid #4caf50;
  }

  .stat-card.blue {
    border-left: 4px solid #2196f3;
  }

  .stat-card.green {
    border-left: 4px solid #8bc34a;
  }

  .stat-card.orange {
    border-left: 4px solid #ff9800;
  }

  .stat-title {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    color: #666;
  }

  .stat-title svg {
    margin-right: 10px;
    font-size: 1.25rem;
  }

  .stat-value {
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 10px;
    color: #333;
  }

  .stat-change {
    display: flex;
    align-items: center;
    font-size: 0.85rem;
  }

  .stat-change.up {
    color: #4caf50;
  }

  .stat-change.down {
    color: #f44336;
  }

  .stat-change svg {
    margin-right: 5px;
  }

  /* Dashboard Grid */
  .dashboard-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
  }

  /* Chart Card */
  .chart-card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    margin-bottom: 20px;
  }

  .card-header {
    padding: 15px 20px;
    border-bottom: 1px solid #eee;
  }

  .card-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
    margin: 0;
  }

  .card-body {
    padding: 20px;
  }

  .chart-placeholder {
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #888;
  }

  /* Quick Actions */
  .quick-actions {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .action-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 20px 15px;
    cursor: pointer;
    transition: all 0.3s;
  }

  .action-btn:hover {
    border-color: #4caf50;
    color: #4caf50;
  }

  .action-btn svg {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  /* Recent Appointments */
  .recent-appointments {
    overflow-x: auto;
  }

  .recent-appointments table {
    width: 100%;
    border-collapse: collapse;
  }

  .recent-appointments th {
    text-align: left;
    padding: 12px 15px;
    background: #f5f7fb;
    color: #666;
    font-weight: 500;
    font-size: 0.85rem;
    text-transform: uppercase;
  }

  .recent-appointments td {
    padding: 12px 15px;
    border-bottom: 1px solid #eee;
    color: #555;
  }

  .appointment-time {
    display: flex;
    flex-direction: column;
  }

  .appointment-time span:last-child {
    font-size: 0.85rem;
    color: #888;
  }

  .status-badge {
    display: inline-block;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 500;
  }

  .status-badge.completed {
    background: #e8f5e9;
    color: #4caf50;
  }

  .status-badge.upcoming {
    background: #e3f2fd;
    color: #2196f3;
  }

  .view-all {
    text-align: right;
    padding: 10px 0;
  }

  .view-all a {
    color: #4caf50;
    text-decoration: none;
    font-size: 0.9rem;
  }

  /* Account Content */
  .account-settings {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .settings-card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  }

  .settings-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    border-bottom: 1px solid #eee;
  }

  .settings-header h2 {
    font-size: 1.1rem;
    margin: 0;
  }

  .edit-btn {
    background: #4caf50;
    color: white;
    border: none;
    padding: 5px 15px;
    border-radius: 4px;
    font-size: 0.85rem;
    cursor: pointer;
  }

  .settings-content {
    padding: 20px;
  }

  .profile-info {
    display: flex;
    gap: 30px;
  }

  .profile-avatar {
    flex-shrink: 0;
  }

  .avatar-initials {
    width: 100px;
    height: 100px;
    background: #4caf50;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
  }

  .profile-details {
    flex: 1;
  }

  .detail-row {
    display: flex;
    margin-bottom: 15px;
  }

  .detail-label {
    width: 120px;
    color: #666;
    font-weight: 500;
  }

  .detail-value {
    color: #333;
  }

  .security-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid #eee;
  }

  .security-item:last-child {
    border-bottom: none;
  }

  .security-item h3 {
    font-size: 1rem;
    margin: 0 0 5px 0;
    color: #333;
  }

  .security-item p {
    margin: 0;
    color: #888;
    font-size: 0.85rem;
  }

  .change-btn, .enable-btn {
    background: none;
    border: 1px solid #4caf50;
    color: #4caf50;
    padding: 5px 15px;
    border-radius: 4px;
    font-size: 0.85rem;
    cursor: pointer;
  }

  .enable-btn {
    border-color: #2196f3;
    color: #2196f3;
  }

  /* Add Doctor Content */
  .doctors-table {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }

  .doctors-table table {
    width: 100%;
    border-collapse: collapse;
  }

  .doctors-table th {
    text-align: left;
    padding: 15px;
    background: #f5f7fb;
    color: #666;
    font-weight: 500;
  }

  .doctors-table td {
    padding: 15px;
    border-bottom: 1px solid #eee;
    color: #555;
  }

  .doctor-name {
    font-weight: 500;
    color: #333;
  }

  .doctor-email {
    font-size: 0.85rem;
    color: #888;
  }

  .action-buttons {
    display: flex;
    gap: 10px;
  }

  .edit-btn, .delete-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    padding: 5px;
  }

  .edit-btn {
    color: #2196f3;
  }

  .delete-btn {
    color: #f44336;
  }

  /* Modal Styles */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
  }

  .modal {
    background: white;
    border-radius: 8px;
    width: 500px;
    max-width: 90%;
    max-height: 90vh;
    overflow-y: auto;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    border-bottom: 1px solid #eee;
  }

  .modal-header h2 {
    margin: 0;
    font-size: 1.25rem;
  }

  .modal-close {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #888;
  }

  .modal-form {
    padding: 20px;
  }

  .form-group {
    margin-bottom: 15px;
  }

  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
    color: #555;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 0.95rem;
  }

  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;
  }

  .btn-cancel {
    background: #f5f5f5;
    border: none;
    padding: 8px 15px;
    border-radius: 4px;
    cursor: pointer;
    color: #555;
  }

  .btn-submit {
    background: #4caf50;
    border: none;
    padding: 8px 15px;
    border-radius: 4px;
    cursor: pointer;
    color: white;
  }

  /* Statistics Content */
  .stats-filters {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }

  .filter-group {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .filter-group label {
    font-size: 0.9rem;
    color: #555;
  }

  .filter-select {
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 0.9rem;
  }

  .filter-btn {
    background: #4caf50;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .stats-charts {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .chart-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  /* Reports Content */
  .reports-actions {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
  }

  .report-btn {
    background: white;
    border: 1px solid #ddd;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .report-btn svg {
    margin-right: 8px;
  }

  .reports-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .report-card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    padding: 15px;
    display: flex;
    align-items: center;
  }

  .report-icon {
    margin-right: 15px;
    color: #4caf50;
    font-size: 1.5rem;
  }

  .report-info {
    flex: 1;
  }

  .report-info h3 {
    margin: 0 0 5px 0;
    font-size: 1rem;
    color: #333;
  }

  .report-info p {
    margin: 0;
    color: #888;
    font-size: 0.85rem;
  }

  .report-actions {
    display: flex;
    gap: 10px;
  }

  .download-btn, .view-btn {
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
  }

  .download-btn {
    background: #e3f2fd;
    color: #2196f3;
    border: none;
  }

  .view-btn {
    background: #4caf50;
    color: white;
    border: none;
  }

  /* Payment Content */
  .payment-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .payment-form {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    padding: 20px;
  }

  .payment-form h2 {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 1.25rem;
  }

  .form-control {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 15px;
    font-size: 0.95rem;
  }

  .btn-payment {
    background: #4caf50;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn-payment svg {
    margin-right: 8px;
  }

  .payment-history {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    padding: 20px;
  }

  .payment-history h2 {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 1.25rem;
  }

  .payment-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .payment-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
  }

  .payment-info h3 {
    margin: 0 0 5px 0;
    font-size: 1rem;
  }

  .payment-info p {
    margin: 0 0 5px 0;
    font-size: 0.9rem;
    color: #666;
  }

  .payment-date {
    font-size: 0.8rem;
    color: #888;
  }

  .payment-amount {
    font-weight: 600;
    color: #4caf50;
    font-size: 1.1rem;
  }

  /* Appointments Content */
  .appointments-tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }

  .tab-btn {
    background: none;
    border: none;
    padding: 8px 15px;
    cursor: pointer;
    color: #555;
    font-size: 0.9rem;
  }

  .tab-btn.active {
    background: #4caf50;
    color: white;
    border-radius: 4px;
  }

  .appointments-actions {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .search-appointments {
    display: flex;
    align-items: center;
    background: #f5f7fb;
    padding: 8px 15px;
    border-radius: 20px;
    width: 300px;
  }

  .search-appointments svg {
    color: #888;
    margin-right: 10px;
  }

  .search-appointments input {
    border: none;
    background: transparent;
    outline: none;
    width: 100%;
  }

  .btn-primary {
    background: #4caf50;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .btn-primary svg {
    margin-right: 8px;
  }

  .appointment-day {
    margin-bottom: 25px;
  }

  .appointment-day h3 {
    margin-bottom: 15px;
    color: #333;
    font-size: 1.1rem;
  }

  .appointment-items {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .appointment-card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    padding: 15px;
    display: flex;
    align-items: center;
  }

  .appointment-card.confirmed {
    border-left: 4px solid #4caf50;
  }

  .appointment-card.pending {
    border-left: 4px solid #ff9800;
  }

  .appointment-time {
    width: 100px;
    font-weight: 500;
    color: #333;
  }

  .appointment-info {
    flex: 1;
  }

  .appointment-info h4 {
    margin: 0 0 5px 0;
    font-size: 1rem;
  }

  .appointment-info p {
    margin: 0;
    color: #666;
    font-size: 0.9rem;
  }

  .appointment-actions {
    display: flex;
    gap: 10px;
  }

  .action-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    padding: 5px;
  }

  /* Add Appointment Content */
  .appointment-form {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    padding: 20px;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-bottom: 15px;
  }

  /* Messages Content */
  .messages-container {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 20px;
    height: calc(100vh - 200px);
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  }

  .messages-sidebar {
    border-right: 1px solid #eee;
    display: flex;
    flex-direction: column;
  }

  .messages-search {
    padding: 15px;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
  }

  .messages-search svg {
    color: #888;
    margin-right: 10px;
  }

  .messages-search input {
    border: none;
    outline: none;
    width: 100%;
  }

  .messages-list {
    flex: 1;
    overflow-y: auto;
  }

  .message-item {
    padding: 15px;
    border-bottom: 1px solid #eee;
    cursor: pointer;
  }

  .message-item.active {
    background: #f5f7fb;
  }

  .message-item.unread {
    background: #e3f2fd;
  }

  .message-sender {
    font-weight: 500;
    margin-bottom: 5px;
    color: #333;
  }

  .message-preview {
    font-size: 0.9rem;
    color: #666;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 5px;
  }

  .message-time {
    font-size: 0.8rem;
    color: #888;
  }

  .message-content {
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: 100%;
  }

  .message-header {
    border-bottom: 1px solid #eee;
    padding-bottom: 15px;
    margin-bottom: 15px;
  }

  .message-header h2 {
    margin: 0 0 5px 0;
    font-size: 1.25rem;
  }

  .message-info {
    display: flex;
    gap: 15px;
    font-size: 0.9rem;
    color: #666;
  }

  .message-date {
    font-size: 0.9rem;
    color: #888;
    margin-bottom: 15px;
  }

  .message-text {
    flex: 1;
    line-height: 1.6;
  }

  .message-reply {
    margin-top: 20px;
    border-top: 1px solid #eee;
    padding-top: 15px;
  }

  .message-reply textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    min-height: 100px;
    margin-bottom: 10px;
  }

  .reply-btn {
    background: #4caf50;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 4px;
    cursor: pointer;
  }

  /* Responsive Styles */
  @media (max-width: 1200px) {
    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .dashboard-grid {
      grid-template-columns: 1fr;
    }
    
    .payment-container {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .sidebar {
      position: fixed;
      left: -250px;
    }
    
    .sidebar.active {
      left: 0;
    }
    
    .stats-grid {
      grid-template-columns: 1fr;
    }
    
    .form-row {
      grid-template-columns: 1fr;
    }
    
    .messages-container {
      grid-template-columns: 1fr;
      height: auto;
    }
    
    .messages-sidebar {
      border-right: none;
      border-bottom: 1px solid #eee;
    }
  }
`;

// Create a style element and append it to the head
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);

export default DentacanAdminPanel;