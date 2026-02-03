import React from 'react';
import Navbar from '../Common/Navbar';
import ItemPanel from '../Common/ItemPanel';

const index = () => {
  return (
    <div className="page_section">
      <Navbar />
      <ItemPanel pageTitle="Important Items" filteredComplated='all' fileredImportant={true}/>
    </div>
  );
};

export default index;
