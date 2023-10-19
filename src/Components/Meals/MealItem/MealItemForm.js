import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import React, { useContext } from 'react'
import CartContext from '../../../Store/cart-context'
const MealItemForm=(props)=>{
    const cartCtx = useContext(CartContext)
    const addItem=(e)=>{
        e.preventDefault()
        cartCtx.totalAmount+=1
    }
    return(
        <form className={classes.form} onSubmit={addItem}>
            <Input label='Amount' input={{
                id:'amount',
                type:'number',
                min:'1',
                max:'5',
                defaultValue:'1'
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