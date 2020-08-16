import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';
import icons from '../../images/icons';
import './Sidebar.scss';
import * as BaseValue from '../../constants/BaseValue';
import { useDispatch } from 'react-redux';
import { actSetCategory } from '../../actions/index';

export default function Sidebar() {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const setCategory = (category) => {
    dispatch(actSetCategory(category));
  };

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: {
          data: { data: categoryList },
        },
      } = await axios.get(`${BaseValue.API_URL}/${BaseValue.GET_CATEGORIES}`);
      setCategories(categoryList);
    };
    fetchData();
  }, []);

  const renderSidebarItem = (arr) => {
    let result = null;
    result = arr.map((item) => (
      <li
        className='sidebar-item'
        key={item.slug}
        onClick={() => setCategory(item.slug)}>
        <ReactSVG src={icons[item.icon]} className='sidebar-icon mr-2' />
        {item.title}
      </li>
    ));
    return result;
  };

  return (
    <div className='sidebar'>
      <ul>{renderSidebarItem(categories)}</ul>
    </div>
  );
}
