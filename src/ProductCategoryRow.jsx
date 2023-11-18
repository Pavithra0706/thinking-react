// ProductCategoryRow.js

import React from 'react';

const ProductCategoryRow = ({ category }) => {
  return (
    <tr className="green">
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
};

export default ProductCategoryRow;
