import { FC } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import './DashboardLayout.scss';

interface DashboardLayoutProps {
  component: React.FC;
}

export const DashboardLayout: FC<DashboardLayoutProps> = ({ component: Component }) => {
  return (
    <div className='app'>
      {/* Sidebar component */}
      <SideBar />
      <main className="layout">
        {/* Header Component */}
        <Header  />
        {/* Dynamic route component */}
        <Component />
      </main>
    </div>
  );
};
