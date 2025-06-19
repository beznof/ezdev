import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-screen min-h-0">
      <Navbar/>
      <main className="flex flex-grow w-full min-h-0">
        <div className='absolute inset-0 w-full h-full -z-10'>
          <div className="w-full h-full inset-0 bg-[radial-gradient(circle_at_50%_20%,_#d946ef_10%,_#e9d5ff_50%,_#fafafa_90%)] dark:bg-[radial-gradient(circle_at_50%_-20%,_#d946ef_10%,_#6b21a8_40%,_#09090b_90%)]"></div>
        </div>
        <div className='flex flex-row flex-grow w-full min-h-0'>
          <Sidebar />
          {children}
        </div>
      </main>
    </div>
  );
}

export default Layout;