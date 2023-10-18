import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
const MealItemForm=(props)=>{
    return(
        <form className={classes.form}>
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