import classNames from 'classnames';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './SearchBar.scss';

export default function SearchBar({ ...props }) {
  const { isTop } = props;
  const [keyword, setKeyword] = useState('');

  const onChangeSearchBar = (event) => {
    if (event.charCode !== 13) {
      const value = event.target.value;
      setKeyword(value);
    } else {
      console.log('Enter');
    }
  };

  const onClearInput = () => {
    setKeyword('');
  };

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
          value={keyword}
          onChange={onChangeSearchBar}
          onKeyPress={onChangeSearchBar}
        />
        {keyword && (
          <Button type='button' className='btn-clear' onClick={onClearInput}>
            <i className='fa fa-times' aria-hidden='true'></i>
          </Button>
        )}
      </div>

      <Button type='button' className='btn-search'>
        <i className='fa fa-search mr-2' aria-hidden='true'></i>
        Search
      </Button>
    </div>
  );
}
