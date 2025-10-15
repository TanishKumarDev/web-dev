import React from 'react';

const Item = ({ name, isPacked }) => {
  return <li className="item">{isPacked ? `${name} ✅` : name}</li>;
};

export default Item;
