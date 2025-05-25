import { Space } from "antd";
import moment from "moment";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";



export const appointmentColumns = [
  {
    title: "Tarih",
    dataIndex: "date",
    key: "date",
    onFilter: (value, record) => record.date.includes(value),
    sorter: (a, b) => a.date.length - b.date.length,
    ellipsis: true,
  },
  {
    title: "Zaman",
    dataIndex: "time",
    key: "time",
    onFilter: (value, record) => record.time.includes(value),
    sorter: (a, b) => a.time.length - b.time.length,
    ellipsis: true,
  },
  {
    title: "Adı",
    dataIndex: "firstname",
    key: "firstname",
    onFilter: (value, record) => record.firstname.includes(value),
    sorter: (a, b) => a.firstname.length - b.firstname.length,
    ellipsis: true,
  },
  {
    title: "Soyadı",
    dataIndex: "lastname",
    key: "lastname",
    onFilter: (value, record) => record.lastname.includes(value),
    sorter: (a, b) => a.lastname.length - b.lastname.length,
    ellipsis: true,
  },
  {
    title: "Telefon",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
    onFilter: (value, record) => record.phoneNumber.includes(value),
    sorter: (a, b) => a.phoneNumber.length - b.phoneNumber.length,
    ellipsis: true,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    onFilter: (value, record) => record.email.includes(value),
    sorter: (a, b) => a.email.length - b.email.length,
    ellipsis: true,
  },
  {
    title: "Doktor İsmi",
    dataIndex: "doctorName",
    key: "doctorName",
    onFilter: (value, record) => record.doctorName.includes(value),
    sorter: (a, b) => a.doctorName.length - b.doctorName.length,
    ellipsis: true,
  },
   {
    title: "Doğrulandı mı",
    dataIndex: "isVerificationName",
    key: "isVerificationName",
    onFilter: (value, record) => record.isVerificationName.includes(value),
    sorter: (a, b) => a.isVerificationName.length - b.isVerificationName.length,
    ellipsis: true,
  },





];
