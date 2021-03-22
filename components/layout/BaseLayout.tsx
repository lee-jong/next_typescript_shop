import React from 'react';

// Component
import Meta from '../shared/Meta';
import NavBar from '../shared/NavBar';
import Banner from '../shared/Banner';
import Footer from '../shared/Footer';
import UserInfo from '../shared/UserInfo'



const BaseLayout = ( {children, nowPage} : any ) => {
  return (
    <>
      <Meta />
      <UserInfo />
      {nowPage == '/' &&  <Banner /> }
      <NavBar nowPage={nowPage}/>
      {children}
      <Footer />
    </>
  );
};


export default BaseLayout;
