import React from 'react';
import CSVTable from './CSVTable.jsx';

const Index = () => {
  return (
    <div className="container">
      <div className="table-container">
        <h1>Hospital Data</h1>
        <CSVTable />
      </div>
    </div>
  );
};

export default Index;
