import React from 'react';
import '../../styles/client/components/UserSidebar.scss';
import { Link } from 'react-router-dom';

export default function UserSidebar() {
  return (
    <div className='user-sidebar'>
      <div className='sidebar-top'>
        <Link className='sidebar-menu active' to='/order'>
          Order
        </Link>

        <Link className='sidebar-menu' to='/help'>
          Need Help
        </Link>
      </div>
      <div className='sidebar-bottom'>
        <Link className='sidebar-menu' to='/profile'>
          Profile
        </Link>

        <div className='sidebar-menu'>Logout</div>
      </div>
    </div>
  );
}
