// src/App.js

import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    // Fetch data from an API or define your data here
    const fetchData = async () => {
      const result = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await result.json();
      setData(data);
    };

    fetchData();
  }, []);

  // Calculate current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h1>My Pagination Example</h1>
      <ul className="list-group mb-4">
        {currentItems.map(item => (
          <li key={item.id} className="list-group-item">
            {item.title}
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(data.length / itemsPerPage)}
        onPageChange={paginate}
      />
    </div>
  );
};

export default App;
