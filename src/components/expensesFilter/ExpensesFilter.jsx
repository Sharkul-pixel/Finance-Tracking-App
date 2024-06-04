import React from 'react';
import './ExpensesFilter.css';

function ExpensesFilter(props) {
  function filterYearData(e){
    const year = e.target.value;
    props.filterYear(year);
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.name} onChange={filterYearData}>
          <option value='2025'>2025</option>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;