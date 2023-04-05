import React from 'react';
import './SideBarComponent.scss';

interface SideBarComponentProps {
}

export const SideBarComponent: React.FC<SideBarComponentProps> = (props) => {

  return (
   <div className='sidebar bg-secondary'>
      <h1>sidebar</h1>
   </div>
  );
};
