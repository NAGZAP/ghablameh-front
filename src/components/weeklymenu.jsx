import React, { useState } from 'react';
import '../styles/weeklymenu.css';
import Navbar from './Navbar';
import Footer from './footer';
const weeklyMenuData = [
  { day: 'Monday', meal: 'Breakfast', food: 'Toast', date: '2024-04-14', distributionTime: '8:00 AM', cost: 5 },
  { day: 'Monday', meal: 'Lunch', food: 'Salad', date: '2024-04-14', distributionTime: '12:00 PM', cost: 8 },
  { day: 'Tuesday', meal: 'Breakfast', food: 'Cereal', date: '2024-04-15', distributionTime: '8:00 AM', cost: 4 },
  { day: 'Tuesday', meal: 'Lunch', food: 'Sandwich', date: '2024-04-15', distributionTime: '12:00 PM', cost: 6 },
  // Additional data
  { day: 'Wednesday', meal: 'Breakfast', food: 'Pancakes', date: '2024-04-16', distributionTime: '8:00 AM', cost: 7 },
  { day: 'Wednesday', meal: 'Lunch', food: 'Burger', date: '2024-04-16', distributionTime: '12:00 PM', cost: 9 },
  { day: 'Thursday', meal: 'Breakfast', food: 'Omelette', date: '2024-04-17', distributionTime: '8:00 AM', cost: 6 },
  { day: 'Thursday', meal: 'Lunch', food: 'Pizza', date: '2024-04-17', distributionTime: '12:00 PM', cost: 10 },
  { day: 'Friday', meal: 'Breakfast', food: 'Yogurt', date: '2024-04-18', distributionTime: '8:00 AM', cost: 3 },
  { day: 'Friday', meal: 'Lunch', food: 'Sushi', date: '2024-04-18', distributionTime: '12:00 PM', cost: 12 },
  { day: 'Saturday', meal: 'Breakfast', food: 'Bagel', date: '2024-04-19', distributionTime: '8:00 AM', cost: 4 },
  { day: 'Saturday', meal: 'Lunch', food: 'Taco', date: '2024-04-19', distributionTime: '12:00 PM', cost: 8 },
  { day: 'Sunday', meal: 'Breakfast', food: 'Waffles', date: '2024-04-20', distributionTime: '8:00 AM', cost: 6 },
  { day: 'Sunday', meal: 'Lunch', food: 'Pasta', date: '2024-04-20', distributionTime: '12:00 PM', cost: 9 },
  // Add more data for other days and meals
];

const WeeklyMenu = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(weeklyMenuData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = weeklyMenuData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const renderHeader = () => {
    const headerValues = ['Day', 'Meal', 'Food', 'Date', 'Distribution Time', 'Cost'];
    return headerValues.map((value, index) => (
      <th key={index}>{value}</th>
    ));
  };

  const renderBody = () => {
    return currentItems.map(({ day, meal, food, date, distributionTime, cost }, index) => (
      <tr key={index}>
        <td>{day}</td>
        <td>{meal}</td>
        <td>{food}</td>
        <td>{date}</td>
        <td>{distributionTime}</td>
        <td>{cost}</td>
      </tr>
    ));
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
          <button className="page-link" onClick={() => handlePageChange(i)}>
            {i}
          </button>
        </li>
      );
    }
    return (
      <nav>
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
              Previous
            </button>
          </li>
          {pageNumbers}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  return (

    <> 
      <Navbar></Navbar>
      <h1 id="title">React Table</h1>
      <div className='menu'>
      <table id="employee">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
      </div>
      {renderPagination()}
      <Footer></Footer>
    </>
  );
};

export default WeeklyMenu;