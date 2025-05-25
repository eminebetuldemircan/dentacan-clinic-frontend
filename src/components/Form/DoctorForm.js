import React, { Fragment } from 'react';

const DoctorForm = ({ formState, setFormStateField }) => {
  return (
    <Fragment>
      <div className="border border-gray-900/10 px-5 py-6 rounded-3xl bg-white shadow-sm">
        <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
          {/* First Name */}
          <div className="col-span-full">
            <label className="block text-sm font-medium text-gray-900">
              Ad <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-2 py-1.5 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter first name"
              value={formState.firstname}
              onChange={(e) => setFormStateField('firstname', e.target.value)}
            />
          </div>

          {/* Last Name */}
          <div className="col-span-full">
            <label className="block text-sm font-medium text-gray-900">
              Soyad <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-2 py-1.5 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter last name"
              value={formState.lastname}
              onChange={(e) => setFormStateField('lastname', e.target.value)}
            />
          </div>

          {/* Title */}
          <div className="col-span-full">
            <label className="block text-sm font-medium text-gray-900">
              Başlık <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-2 py-1.5 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              placeholder="Dr., Prof., vs.."
              value={formState.title}
              onChange={(e) => setFormStateField('title', e.target.value)}
            />
          </div>

          {/* Specialization */}
          <div className="col-span-full">
            <label className="block text-sm font-medium text-gray-900">
              Uzmanlık <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-2 py-1.5 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              placeholder="e.g., Cardiology, Dermatology"
              value={formState.specialization}
              onChange={(e) => setFormStateField('specialization', e.target.value)}
            />
          </div>

          {/* Phone Number */}
          <div className="col-span-full">
            <label className="block text-sm font-medium text-gray-900">
              Telefon Numarası <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-2 py-1.5 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              placeholder="+90 5xx xxx xx xx"
              value={formState.phoneNumber}
              onChange={(e) => setFormStateField('phoneNumber', e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="col-span-full">
            <label className="block text-sm font-medium text-gray-900">
              E-mail <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-2 py-1.5 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              placeholder="örnek@mail.com"
              value={formState.email}
              onChange={(e) => setFormStateField('email', e.target.value)}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DoctorForm;
