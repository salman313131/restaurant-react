import { useContext } from "react"
import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"
import CartContext from "../../Store/cart-context"
const HeaderCartButton=(props)=>{
    const cartCtx = useContext(CartContext)
    const numberOfCartItem = cartCtx.items.reduce((currValue,item)=>{
        return currValue+item.amount
    },0)
    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItem}</span>
        </button>
    )

}
export default HeaderCartButton