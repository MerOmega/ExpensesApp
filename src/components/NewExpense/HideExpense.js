import React from "react";

function HideExpense(props){

    const showForm =()=>{
        props.showFormAction()
    }

    return(
        <button type="button" onClick={showForm}>Add Expense</button>
    )
}

export default HideExpense;