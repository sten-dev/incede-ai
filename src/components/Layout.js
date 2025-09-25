import React from 'react';
import '../index.scss';
import LayoutBody from './LayoutBody';
import MetaData from './MetaData';
import { ServiceContextProvider } from '../context/ServiceContext';

const Layout = ({ children, page, pageTitle, location, pageDescription, keyWords }) => {
  console.log('pageTitle', pageTitle);

  return (
    <ServiceContextProvider>
      <div>
        <MetaData pageTitle={pageTitle} pageDescription={pageDescription} keyWords={keyWords} />
        <LayoutBody page={page} location={location}>{children}</LayoutBody>
      </div>
    </ServiceContextProvider>
  );
};

export default Layout;
