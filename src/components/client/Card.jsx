import React from 'react';
import '../../styles/client/components/Card.scss';

let items = [
  {
    name: 'Home',
    content: '123456',
    selected: true,
  },
  {
    name: 'Home',
    content: '123456',
    selected: false,
  },
  {
    name: 'Home',
    content: '123456',
    selected: false,
  },
];

const Item = ({ ...props }) => {
  const { name, content, isActive } = props;
  return (
    <div className={`item ${isActive && 'active'}`}>
      <div className='name'>
        {name ? name : isActive ? 'Primary' : 'Secondary'}
      </div>
      <div className='content'>{content}</div>
      <div className='btn-edit'>
        <i className='fa fa-pencil' aria-hidden='true'></i>
      </div>
      <div className='btn-delete'>
        <i className='fa fa-trash' aria-hidden='true'></i>
      </div>
    </div>
  );
};

export default function Card({ ...props }) {
  const { className, index, title, hasAdd } = props;
  const renderItems = () => {
    return items.map((item) => {
      return (
        <div className='col-md-4'>
          <Item
            isActive={item.selected}
            name={item.name}
            content={item.content}
          />
        </div>
      );
    });
  };
  return (
    <div className={`card ${className && className}`}>
      <div className='card-header d-flex p-0'>
        <div className='title d-flex align-items-center'>
          <span>{index}</span>
          {title}
        </div>
        {hasAdd && (
          <div className='option-add'>
            <i className='fa fa-plus mr-2' aria-hidden='true'></i>
            Add
          </div>
        )}
      </div>
      <div className='card-content row p-0 m-0'>
        {props.children ? props.children : items && renderItems()}
      </div>
    </div>
  );
}
