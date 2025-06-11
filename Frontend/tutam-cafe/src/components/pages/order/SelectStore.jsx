import React from 'react';
import BreadCrumbs from '../BreadCrumbs';

function SelectStore() {
  return (
    <div>
      <BreadCrumbs />
      <h1 className="text-2xl font-bold mt-4">Select a Store</h1>
      {/* Store selection logic here */}
    </div>
  );
}

export default SelectStore;
