
import "../../componentesStyle/NewExpense/ExpenseForm.css"
import { useState } from "react";

function ExpenseForm(props){ 
    // const [enteredTitle,setEnteredTitle]=useState("Title");
    // const [enteredAmount,setEnteredAmount]=useState("Amount");
    // const [enteredDate,setEnteredDate]=useState("");

    const [userInput,setUserInput]=useState(
        {
        enteredTitle:"",
        enteredAmount:"",
        enteredDate:""
        }
    )

    const titleChanges=(event)=>{
        setUserInput((prevstate)=>{
            return {...prevstate,enteredTitle: event.target.value}
        })
    }
    const amountChanges=(event)=>{
        setUserInput((prevstate)=>{
            return {...prevstate,enteredAmount: event.target.value}
        })
    }
    const dateChanges=(event)=>{
        setUserInput((prevstate)=>{
            return {...prevstate,enteredDate: event.target.value}
        })
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        props.onSaveExpense(userInput);
        setUserInput({
            enteredTitle:"",
            enteredAmount:"",
            enteredDate:""
        })
    }


    return(
        <form action="" onSubmit={submitHandler} >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title:</label>
                    <input type="text" value={userInput.enteredTitle} onChange={titleChanges} />
                </div>
                <div className="new-expense__control">
                    <label >Amount</label>
                    <input type="number" value={userInput.enteredAmount} min="0.01" step={0.01} onChange={amountChanges} />
                </div>
                <div className="new-expense__control">
                    <label >Date</label>
                    <input type="date" value={userInput.enteredDate} min="2022-01-01" onChange={dateChanges}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )

}

export default ExpenseForm;