import React from 'react';
import Navbar from '../components/navbar';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <Navbar/>
      <main className="layout-main">
        {children}
      </main>
      <footer className="layout-footer">
        <p>&copy; 2025 ezdev</p>
      </footer>
    </div>
  );
}

export default Layout;