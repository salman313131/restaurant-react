import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../Store/cart-context'
import { useContext } from 'react'
const MealItem=(props)=>{
    const price = `Rs.${(props.price*80).toFixed(2)}`
    const cartCtx = useContext(CartContext)
    const addToCartHandler=(amount)=>{
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price*80
        })
    }
    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler}/>
            </div>
        </li>
    )
}
export default MealItem