import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar/>
      <main className="w-full h-full flex">
        <div className='absolute -z-10 w-full h-full inset-0'>
          <div className="w-full h-full inset-0 bg-[radial-gradient(circle_at_50%_20%,_#d946ef_10%,_#e9d5ff_50%,_#fafafa_90%)] dark:bg-[radial-gradient(circle_at_50%_-20%,_#d946ef_10%,_#6b21a8_40%,_#09090b_90%)]"></div>
        </div>
        <div className='flex w-full h-full'>
          <Sidebar />
          {children}
        </div>
      </main>
    </div>
  );
}

export default Layout;