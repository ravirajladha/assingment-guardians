import React, { useState, useEffect } from 'react';
import { useTable, useFilters, useSortBy } from 'react-table';
import Papa from 'papaparse';
import csvFile from '../hospital_db.csv'; // Replace with the actual path to your CSV file

const CSVTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Papa.parse(csvFile, {
      header: true,
      download: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  }, []);

  const columns = React.useMemo(
    () => {
      const keys = Object.keys(data[0] || {});
      return keys.map(key => ({ Header: key, accessor: key }));
    },
    [data]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
  } = useTable({ columns, data }, useFilters, useSortBy); // Add useSortBy hook

  return (
    <div>
      <div style={{ margin: '20px 20px' }}>
        <span>Filter: </span>
        <input
          type="text"
          placeholder="Enter Name "
          onChange={(e) => setFilter('Name', e.target.value)}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          placeholder="Enter Area Name"
          onChange={(e) => setFilter('Area', e.target.value)}
        />
      </div>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}> {/* Add column.getSortByToggleProps() */}
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CSVTable;
