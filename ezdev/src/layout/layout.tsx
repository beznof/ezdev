import React from 'react';
import Navbar from '../components/navbar';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar/>
      <main className="w-full h-full">
        {children}
      </main>
    </div>
  );
}

export default Layout;