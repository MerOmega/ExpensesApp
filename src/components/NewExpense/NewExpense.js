import '../../componentesStyle/NewExpense/NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
import HideExpense from './HideExpense';

function NewExpense(props){
    const [showForm, setShowForm] = useState(false);
    const saveExpenseHandler=(expenseToSave)=>{
        const expenseData={
            ...expenseToSave,
            id:Date.now().toString(36) + Math.random().toString(36).substr(2, 9),
        };
        props.saveExpense(expenseData)
    }

    const showFormAction=()=>{
        setShowForm(true)
    }
    
    const hideFormAction=()=>{
        setShowForm(false);
    }

    return(
        <div className='new-expense'>
            {
                !showForm ?(
                    <HideExpense showFormAction={showFormAction}></HideExpense>
                ):(
                    <ExpenseForm onSaveExpense={saveExpenseHandler} 
                        hideFormAction={hideFormAction}>

                    </ExpenseForm>
                )
            }
            
        </div>
    )
}

export default NewExpense