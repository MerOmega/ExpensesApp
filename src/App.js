import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "Car Insurance",
      date: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
      amount: 540,
    },
    {
      title: "Phone Bought",
      date: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
      amount: 1200,
    },
    {
      title: "Bike",
      date: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
      amount: 600,
    },
  ];
  return (
    <div className="App">
      <h1>Hey there</h1>
      {expenses.map((item) => {
        return <ExpenseItem item={item} />;
      })}
    </div>
  );
}

export default App;
