import React, { Fragment } from 'react'

const GenericBadge = ({count}) => {
  return (
  <Fragment>
      <div className="relative inline-block ml-2">
    <span className="inline-flex items-center justify-center px-2 py-1 mb-2 text-xs font-bold leading-none text-red-100 bg-black rounded-full">
      {count}
    </span>
  </div>
  </Fragment>
  )
}

export default GenericBadge