import { useState } from "react";
import "../../componentesStyle/UI/Expenses.css"
import NotFoundExpense from "../EmptyExpense/NotFoundExpense";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    const [filterYear, setFilterYear] = useState("2023");
  
    const filterChange = (value) => {
      setFilterYear(value);
    };
  
    const filteredExpenses = props.expenses.filter(
      (item) => item.year == filterYear
    );
  
    return (
      <div className="expenses">
        <ExpensesFilter defaultYear={filterYear} onChangeFilter={filterChange} />
        {filteredExpenses.length === 0 ? (
          <NotFoundExpense/>
        ) : (
          filteredExpenses.map((item, index) => {
            return <ExpenseItem key={index} item={item} />;
          })
        )}
      </div>
    );
  }
  

export default Expenses;