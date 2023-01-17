import "../componentesStyle/Expenses.css"
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    return (
        <div className="expenses">
            {props.expenses.map((item) => {
                return <ExpenseItem item={item} />;
            })}
        </div>
    )
}

export default Expenses;