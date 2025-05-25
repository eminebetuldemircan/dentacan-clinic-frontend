import React, { Fragment, useState } from "react";


import { useSelector } from "react-redux";
import ContactUsMessageItem from "./ContactUsMessageItem";
import GenericBadge from "../Badge/GenericBadge";
import LoadingSpinner from "../Spinner/LoadingSpinner";
import EmptyResult from "../result/EmptyResult";
import ListPagination from "../Pagination/ListPagination";

const ITEMS_PER_PAGE = 5;

const ContactUsMessageList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const getAllContactUsMessage = useSelector(
    (state) => state.contactUs.getAllContactUsMessage
  );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentMessages = getAllContactUsMessage.contactUsMessages.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(
    getAllContactUsMessage.contactUsMessages.length / ITEMS_PER_PAGE
  );

  return (
    <Fragment>
      <div className="min-h-[1024px] bg-white my-12">
        <div className="min-h-full">
          <main className="pt-8 pb-16">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="px-4 sm:px-0 flex justify-between items-center">
                <div className="inline-flex items-center space-x-2">
                  <h2 className="text-lg font-medium text-gray-900">
                  Mesajlar
                  </h2>
                  <GenericBadge
                    count={getAllContactUsMessage.contactUsMessages.length}
                  />
                </div>
              </div>

              <ul
                role="list"
                className="mt-5 divide-y divide-gray-200 border-t border-gray-200 sm:mt-0 sm:border-t-0"
              >
                {getAllContactUsMessage.loading ? (
                  <LoadingSpinner />
                ) : !getAllContactUsMessage.loading &&
                  currentMessages.length === 0 ? (
                  <EmptyResult isShowAddButton={false} />
                ) : (
                  currentMessages.map((contactUsItem, index) => (
                    <ContactUsMessageItem
                      key={index}
                      contactUsItem={contactUsItem}
                    />
                  ))
                )}
              </ul>

              {currentMessages.length !== 0 && (
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

export default ContactUsMessageList;
