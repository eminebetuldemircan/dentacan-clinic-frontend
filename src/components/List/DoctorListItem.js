import React, { Fragment, useState } from 'react'
import { FiEdit2, FiTrash2, FiMoreVertical, FiMail, FiPhone, FiAward, FiUser } from 'react-icons/fi'

const DoctorListItem = ({ doctor, handleDelete, handleEdit }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  const togglePopover = () => setIsPopoverOpen(!isPopoverOpen)

  return (
    <div className="w-full p-4 transition-all duration-200 hover:scale-[1.01]">
      <div className="p-6 border border-gray-200 rounded-2xl shadow-sm bg-white relative w-full hover:shadow-md transition-shadow duration-200">
        {/* Action toolbar */}
        <div className="absolute top-4 right-4">
          <div className="relative inline-block text-left">
            <button
              onClick={togglePopover}
              type="button"
              className="inline-flex justify-center p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full transition-colors duration-150"
              aria-expanded={isPopoverOpen}
              aria-haspopup="true"
            >
              <FiMoreVertical className="h-5 w-5" />
            </button>

            {isPopoverOpen && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 divide-y divide-gray-100"
                role="menu"
              >
                <div className="py-1">
                  <button
                    onClick={() => {
                      handleEdit(doctor)
                      setIsPopoverOpen(false)
                    }}
                    className="text-gray-700 flex items-center px-4 py-2 text-sm w-full text-left hover:bg-gray-50 transition-colors duration-150"
                  >
                    <FiEdit2 className="w-4 h-4 mr-2 text-blue-500" />
                    Düzenle
                  </button>
                </div>
                <div className="py-1">
                  <button
                    onClick={() => {
                      handleDelete(doctor.id)
                      setIsPopoverOpen(false)
                    }}
                    className="text-gray-700 flex items-center px-4 py-2 text-sm w-full text-left hover:bg-gray-50 transition-colors duration-150"
                  >
                    <FiTrash2 className="w-4 h-4 mr-2 text-red-500" />
                    Sil
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Doctor Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <FiUser className="h-6 w-6" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{doctor.firstname} {doctor.lastname}</h2>
              <p className="text-blue-600 text-sm font-medium">{doctor.specialization}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                <FiAward className="h-5 w-5 text-gray-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Uzmanlık</p>
                <p className="text-gray-800 font-medium">{doctor.title}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                <FiPhone className="h-5 w-5 text-gray-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Telefon</p>
                <p className="text-gray-800 font-medium">{doctor.phoneNumber}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                <FiMail className="h-5 w-5 text-gray-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500">E-mail</p>
                <p className="text-gray-800 font-medium break-all">{doctor.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorListItem