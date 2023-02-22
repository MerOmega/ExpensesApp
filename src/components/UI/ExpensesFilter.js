import React from 'react';

import '../../componentesStyle/UI/ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const currentYear = new Date().getFullYear();
  const years = Array.from({length: currentYear - 1999}, (_, index) => currentYear - index);

  const filterChange = (event) => {
    props.onChangeFilter(event.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select className='text-black' value={props.defaultYear} onChange={filterChange}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;