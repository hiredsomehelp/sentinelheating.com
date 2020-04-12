import PropTypes from 'prop-types';
import React from 'react';

import Header from './header';

function Layout({ children }) {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <Header />

      <main className="">{children}</main>

      <footer className="bg-blue-700"></footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
