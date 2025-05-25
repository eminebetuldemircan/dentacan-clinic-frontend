import React, { Fragment } from 'react'

const ListPagination = ({currentPage,setCurrentPage,totalPages}) => {
  return (
    <Fragment>
         <nav
              className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0"
              aria-label="Pagination"
            >
              <div className="-mt-px flex w-0 flex-1">
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700"
                >
                  <svg
                    className="mr-3 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Previous
                </button>
              </div>
              <div className="hidden md:-mt-px md:flex">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium ${
                        currentPage === page
                          ? "border-purple-500 text-purple-600"
                          : "border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>
              <div className="-mt-px flex w-0 flex-1 justify-end">
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700"
                >
                  Next
                  <svg
                    className="ml-3 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </nav>
    </Fragment>
  )
}

export default ListPagination