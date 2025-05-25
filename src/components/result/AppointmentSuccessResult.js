import React from 'react';

const AppointmentSuccessResult = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-green-50 border border-green-200 text-green-800 rounded-2xl p-6 shadow-md max-w-md mx-auto">
      <svg
        className="w-12 h-12 text-green-600 mb-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <h2 className="text-xl font-semibold">Randevunuz başarıyla oluşturuldu!</h2>
      <p className="text-sm text-green-700 mt-2 text-center">
        En kısa sürede sizinle iletişime geçeceğiz. İlginiz için teşekkür ederiz.
      </p>
    </div>
  );
};

export default AppointmentSuccessResult;

