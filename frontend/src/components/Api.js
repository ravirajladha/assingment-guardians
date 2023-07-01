import React, { useState } from 'react';
import axios from 'axios';

const Api = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [area, setArea] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/data?name=${name}&area=${area}`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="container">
      <h1>Data fetching from API</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="area">Area:</label>
          <input
            type="text"
            className="form-control"
            id="area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Fetch Data</button>
      </form>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Lat</th>
              <th>Long</th>
              <th>Area</th>
              <th>Type</th>
              {/* Add more columns here as per your CSV file */}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Address}</td>
                <td>{item.Lat}</td>
                <td>{item.Lng}</td>
                <td>{item.Area}</td>
                <td>{item.Type}</td>
                {/* Render additional columns here as per your CSV file */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Api;
