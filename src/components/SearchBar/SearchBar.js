import React from 'react';
import { Button } from 'react-bootstrap';
import './SearchBar.scss';
import classNames from 'classnames';

export default function SearchBar({ ...props }) {
  const { isTop } = props;
  return (
    <div className={classNames('search-bar', { top: isTop })}>
      <div className='prepend'>
        {isTop ? (
          <i className='fa fa-search' aria-hidden='true'></i>
        ) : (
          'Glocery'
        )}
      </div>
      <div className='input-group w-100'>
        <input
          type='text'
          placeholder='Search your books from here'
          className='search-input'
        />
        <Button type='button' className='btn-clear'>
          <i className='fa fa-times' aria-hidden='true'></i>
        </Button>
      </div>

      <Button type='button' className='btn-search'>
        <i className='fa fa-search mr-2' aria-hidden='true'></i>
        Search
      </Button>
    </div>
  );
}
