import React from 'react';
import './List.css';

const List = ( {entries} ) => {
  return (
    <div className="settings-list">
      {entries.map(([key, value]) => (
        <div className="settings-item" key={key}>
          <span className="settings-key">{key.replace(/([a-z])([A-Z])/g, '$1 $2').charAt(0).toUpperCase() + key.slice(1)}</span>
          <span >{value}</span>
        </div>
      ))}
    </div>
  );
};

export default List;
