import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ReactSVG } from 'react-svg';
import { actSetCategory, actSetDefault } from '../../actions/index';
import * as BaseValue from '../../constants/BaseValue';
import icons from '../../images/icons';
import '../../styles/client/components/Sidebar.scss';

export default function Sidebar({ ...props }) {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(true);
  const [category, setCategoryActive] = useState(null);

  const dispatch = useDispatch();
  const setCategory = (category) => {
    setCategoryActive(category);
    setOpen(false);
    dispatch(actSetCategory(category));
    dispatch(actSetDefault());
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

  useEffect(() => {
    window.scrollTo({
      top: props.myRef.current.offsetTop - 100,
      behavior: 'smooth',
    });
  }, [category, props.myRef]);

  const renderSidebarItem = (arr) => {
    let result = null;
    result = arr.map((item) => (
      <li
        className={`sidebar-item ${category === item.slug ? 'active' : ''}`}
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
      <div className='sidebar-mobile d-flex w-100 p-3 align-items-center d-lg-none'>
        <div className='d-flex align-items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 14 14'>
            <path
              data-name='Path 2029'
              d='M13.563,7.876H8.313a.437.437,0,0,0-.437.437v5.25A.437.437,0,0,0,8.313,14h5.25A.437.437,0,0,0,14,13.564V8.314A.437.437,0,0,0,13.563,7.876Zm0-7.875H8.313a.437.437,0,0,0-.437.437v5.25a.437.437,0,0,0,.437.437h5.25A.437.437,0,0,0,14,5.688V.438A.437.437,0,0,0,13.563,0ZM5.687,0H.437A.438.438,0,0,0,0,.438v5.25a.437.437,0,0,0,.437.437h5.25a.437.437,0,0,0,.437-.437V.438A.438.438,0,0,0,5.687,0Zm0,7.875H.437A.437.437,0,0,0,0,8.314v5.25A.437.437,0,0,0,.437,14h5.25a.437.437,0,0,0,.437-.437V8.314A.437.437,0,0,0,5.687,7.876Z'
              transform='translate(0 -0.001)'
              fill='currentColor'></path>
          </svg>
          <span className='pl-3'>Select your Category</span>
        </div>
        <div onClick={() => setOpen(!open)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='10'
            height='5'
            viewBox='0 0 10 5'>
            <path
              data-name='Path 2030'
              d='M0,63.75l5,5,5-5Z'
              transform='translate(0 -63.75)'
              fill='currentColor'></path>
          </svg>
        </div>
      </div>
      <ul className={`d-lg-block ${open ? '' : 'd-none'}`}>
        {renderSidebarItem(categories)}
      </ul>
    </div>
  );
}
