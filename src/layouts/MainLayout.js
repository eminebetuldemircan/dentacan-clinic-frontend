import React, { Fragment } from 'react'
import MainHeader from '../components/MainHeader/MainHeader'
import MainFooter from '../components/MainFooter/MainFooter'


const MainLayout = (props) => {
  return (
   <Fragment>
     <MainHeader />
     <div className="bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
    {props.children}  
    </div>
    <MainFooter />
   </Fragment>
  )
}

export default MainLayout