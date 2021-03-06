import classNames from 'classnames';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../../styles/client/components/SearchBar.scss';

export default function SearchBar({ ...props }) {
  const { isTop, setKeyword, setSearchMobile } = props;
  const [value, setValue] = useState('');

  const onChangeSearchBar = (event) => {
    if (event.charCode !== 13) {
      const value = event.target.value;
      setValue(value);
    } else {
      onSearch();
    }
  };

  const onClearInput = () => {
    setValue('');
  };

  const onSearch = () => {
    setKeyword(value.trim());
    setValue('');
    window.scrollTo({
      top: window.innerHeight + 110,
      behavior: 'smooth',
    });
    if (setSearchMobile) {
      setSearchMobile(false);
    }
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
      <div className='input-group w-100 h-100'>
        <input
          type='text'
          placeholder='Search your books from here'
          className='search-input'
          value={value}
          onChange={onChangeSearchBar}
          onKeyPress={onChangeSearchBar}
        />
        {value && (
          <Button type='button' className='btn-clear' onClick={onClearInput}>
            <i className='fa fa-times' aria-hidden='true'></i>
          </Button>
        )}
      </div>

      <Button type='button' className='btn-search' onClick={onSearch}>
        <i className='fa fa-search mr-2' aria-hidden='true'></i>
        Search
      </Button>
    </div>
  );
}
