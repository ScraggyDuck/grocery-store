import React from 'react';

import './Sidebar.scss';

import icons from '../../images/icons';

const sidebarItems = [
  {
    icon: icons.fruits,
    title: 'Fruits & Vegetables',
  },
  {
    icon: icons.meats,
    title: 'Meats & Fish',
  },
  {
    icon: icons.snacks,
    title: 'Snacks',
  },
  {
    icon: icons.petcare,
    title: 'Pet Care',
  },
  {
    icon: icons.home,
    title: 'Home & Cleaning',
  },
  {
    icon: icons.dairy,
    title: 'Dairy',
  },
  {
    icon: icons.cooking,
    title: 'Cooking',
  },
  {
    icon: icons.breakfast,
    title: 'Breakfast',
  },
  {
    icon: icons.beverage,
    title: 'Beverage',
  },
  {
    icon: icons.beauty,
    title: 'Beauty & Health',
  },
];

const renderSidebarItem = (arr) => {
  return arr.map((item, index) => (
    <li className='sidebar-item' key={index}>
      <img className='img-fluid mr-2' src={item.icon} alt={item.title} />
      {item.title}
    </li>
  ));
};

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <ul>{renderSidebarItem(sidebarItems)}</ul>
    </div>
  );
}
