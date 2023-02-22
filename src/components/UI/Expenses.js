import { useState } from "react";
import "../../componentesStyle/UI/Expenses.css"
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {

    const [filterYear,setFilterYear]=useState("2022");

    const filterChange = (value)=>{
       setFilterYear(value);
    }

    return (
        <div className="expenses">
            <ExpensesFilter defaultYear={filterYear} onChangeFilter={filterChange}></ExpensesFilter>
            {props.expenses.filter((item) => item.year == filterYear).map((item,index) => {
                return <ExpenseItem key={index} item={item} />;
            })}
        </div>
    )
}

export default Expenses;