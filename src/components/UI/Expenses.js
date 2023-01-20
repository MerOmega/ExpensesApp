import "../../componentesStyle/UI/Expenses.css"
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    return (
        <div className="expenses">
            <ExpensesFilter></ExpensesFilter>
            {props.expenses.map((item,index) => {
                return <ExpenseItem key={index} item={item} />;
            })}
        </div>
    )
}

export default Expenses;