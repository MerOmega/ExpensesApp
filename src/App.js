import Expenses from "./components/Expenses"
import 'bootstrap/dist/css/bootstrap.min.css';

function getday(option) {
  let today = new Date();
  return today.toLocaleDateString("es-ES", option);
}
function App() {
  let day = {
    day: getday({day:"2-digit"}),
    month: getday({month:"long"}),
    year: getday({year:"numeric"}),
  }
  const expenses = [
    {
      title: "Car Insurance",
      month: day.month,
      day: day.day,
      year: day.year,
      amount: 540,
    },
    {
      title: "Phone Bought",
      month: day.month,
      day: day.day,
      year: day.year,
      amount: 1200,
    },
    {
      title: "Bike",
      month: day.month,
      day: day.day,
      year: day.year,
      amount: 600,
    },
  ];
  return (
    <div className="App">
      <h1>Hey there</h1>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
