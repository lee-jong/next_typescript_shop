import React from 'react';

// Component
import Meta from '../shared/Meta';
import NavBar from '../shared/NavBar';
import Banner from '../shared/Banner';
import Footer from '../shared/Footer';

const BaseLayout = ({ children }) => {
  return (
    <>
      <Meta />
      <Banner /> 
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
