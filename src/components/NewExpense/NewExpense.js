import '../../componentesStyle/NewExpense/NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props){

    const saveExpenseHandler=(expenseToSave)=>{
        const expenseData={
            ...expenseToSave,
            id:Date.now().toString(36) + Math.random().toString(36).substr(2, 9),
        };
        props.saveExpense(expenseData)
    }

    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpense={saveExpenseHandler}></ExpenseForm>
        </div>
    )
}

export default NewExpense