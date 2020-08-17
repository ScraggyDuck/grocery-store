import React from 'react';
import { useDispatch } from 'react-redux';
import { actSetKeyword } from '../actions/index';
import SearchBar from '../components/client/SearchBar';

export default function SearchBarContainer({ ...props }) {
  //   const { keyword } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const setKeyword = (keyword) => {
    dispatch(actSetKeyword(keyword));
  };
  return <SearchBar isTop={props.isTop} setKeyword={setKeyword} />;
}
