import React, { Fragment } from "react";

const GenericModal = ({
  closeModal,
  title,
  description,
  children,
  onSave,
  saveLabel,
  cancelLabel = "Cancel",
  widthClassName,
}) => {
  return (
    <Fragment>
      <section className="fixed inset-0 z-50 flex items-center justify-center flex-wrap  bg-neutral-500 bg-opacity-80 ">
        <div className={widthClassName}>
          <div className="flex-1 px-6 overflow-auto ">
            <div className="flex flex-wrap justify-between mb-5 -m-2">
              <div className="w-auto p-2">
                <h3 className="font-heading mb-1 text-lg text-neutral-600 font-semibold">
                  {title}
                </h3>
                <p className="text-sm text-neutral-400 font-medium">
                  {description}
                </p>
              </div>
              <div className="w-auto p-2">
                <a
                  onClick={closeModal}
                  className="relative top-1 text-neutral-600 hover:text-neutral-400"
                  href="#"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.96967 12.9697C3.67678 13.2626 3.67678 13.7374 3.96967 14.0303C4.26256 14.3232 4.73744 14.3232 5.03033 14.0303L3.96967 12.9697ZM14.0303 5.03033C14.3232 4.73744 14.3232 4.26256 14.0303 3.96967C13.7374 3.67678 13.2626 3.67678 12.9697 3.96967L14.0303 5.03033ZM5.03033 3.96967C4.73744 3.67678 4.26256 3.67678 3.96967 3.96967C3.67678 4.26256 3.67678 4.73744 3.96967 5.03033L5.03033 3.96967ZM12.9697 14.0303C13.2626 14.3232 13.7374 14.3232 14.0303 14.0303C14.3232 13.7374 14.3232 13.2626 14.0303 12.9697L12.9697 14.0303ZM5.03033 14.0303L14.0303 5.03033L12.9697 3.96967L3.96967 12.9697L5.03033 14.0303ZM3.96967 5.03033L12.9697 14.0303L14.0303 12.9697L5.03033 3.96967L3.96967 5.03033Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {children}
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={closeModal}
            >
              {cancelLabel}
            </button>

            <button
              type="button" // Change to "button" as we are not submitting a form here
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={onSave}
            >
              {saveLabel}
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default GenericModal;
