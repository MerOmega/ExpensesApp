import Expenses from "./components/UI/Expenses"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./componentesStyle/input.css";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

function getday(option) {
  let today = new Date();
  return today.toLocaleDateString("es-ES", option);
}

let day = {
  day: getday({ day: "2-digit" }),
  month: getday({ month: "long" }),
  year: getday({ year: "numeric" }),
}

const DUMMY_CONTENT = [
  {
    title: "Car Insurance",
    month: "05",
    day: "21",
    year: 2022,
    amount: 540,
  },
  {
    title: "Phone Bought",
    month: "09",
    day: "04",
    year: 2021,
    amount: 1200,
  },
  {
    title: "Bike",
    month: "12",
    day: "11",
    year: 2023,
    amount: 600,
  },
];
function App() {
  const [expences, setExpenses] = useState(DUMMY_CONTENT);
  const newExpenseHandler = (expense) => {
    let newData = {
      title: expense.enteredTitle,
      month: expense.enteredDate.substring(5, 7),
      day: expense.enteredDate.substring(8, 10),
      year: expense.enteredDate.substring(0, 4),
      amount: expense.enteredAmount,
    }

    setExpenses((prevData) => {
      const updatedData = [newData, ...prevData];
      updatedData.sort((a, b) => {
        const dateA = new Date(`${a.year}-${a.month}-${a.day}`);
        const dateB = new Date(`${b.year}-${b.month}-${b.day}`);
        return dateB - dateA;
      }).reverse();
      return updatedData;
    });
  }



  return (
    <div className="App dark">
      <NewExpense saveExpense={newExpenseHandler}></NewExpense>
      <Expenses expenses={expences} ></Expenses>
    </div>
  );
}

export default App;
