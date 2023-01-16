import "../componentesStyle/ExpenseItem.css";
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <h2>{props.item.date}</h2>

      <div className="expense-item__description">
        <h2>{props.item.title}</h2>
        <p className="expense-item__price">${props.item.amount}</p>
      </div>
    </div>
  );
}

export default ExpenseItem;
