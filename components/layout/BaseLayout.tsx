import React from 'react';

// Component
import Meta from '../shared/Meta';
import NavBar from '../shared/NavBar';
import Banner from '../shared/Banner';
import Footer from '../shared/Footer';
import UserInfo from '../shared/UserInfo'

const BaseLayout = ( {children} : any ) => {
  return (
    <>
      <Meta />
      <UserInfo />
      <Banner /> 
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
