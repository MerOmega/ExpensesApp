import Expenses from "./components/UI/Expenses"
import 'bootstrap/dist/css/bootstrap.min.css';
import NewExpense from "./components/NewExpense/NewExpense";

function getday(option) {
  let today = new Date();
  return today.toLocaleDateString("es-ES", option);
}

let day = {
  day: getday({day:"2-digit"}),
  month: getday({month:"long"}),
  year: getday({year:"numeric"}),
}

let expenses = [
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
  
  const newExpenseHandler=(expense)=>{
      let newData = {
        title: expense.enteredTitle,
        month: expense.enteredDate.substring(5, 7),
        day: expense.enteredDate.substring(8, 10),
        year: expense.enteredDate.substring(0, 4),
        amount: expense.enteredAmount,
      }
      expenses.push(newData)
      console.log(expenses)
  }

  return (
    <div className="App">
      <h1>Hey there</h1>
      <NewExpense saveExpense={newExpenseHandler}></NewExpense>
      <Expenses expenses={expenses} ></Expenses>
    </div>
  );
}

export default App;
