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
        <div className='absolute -z-10 w-full h-full inset-0'>
          <div className="w-full h-full bg-radial-[at_50%_20%] from-fuchsia-500 dark:from-gray-50 via-purple-200 dark:via-purple-700 to-gray-50 dark:to-gray-950 to-w to-90%"></div>
        </div>
        {children}
      </main>
    </div>
  );
}

export default Layout;