import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import React, { useRef } from 'react'
const MealItemForm=(props)=>{
    const amountInputRef = useRef()
    const addItem=(e)=>{
        e.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount
        props.onAddToCart(enteredAmountNumber)
    }
    return(
        <form className={classes.form} onSubmit={addItem}>
            <Input label='Amount' input={{
                ref:amountInputRef,
                id:'amount',
                type:'number',
                min:'1',
                defaultValue:1,
                max:'5',
            }}/>
            <button>+ Add</button>
        </form>
        // <>
        // <h3>Amount</h3>
        // <h3>{inputAmount}</h3>
        // <button onClick={increase}>+Add</button>
        // </>
    )
}
export default MealItemForm