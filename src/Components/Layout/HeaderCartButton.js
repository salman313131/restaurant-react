import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"
import CartContext from "../../Store/cart-context"
import React,{useContext} from "react"
const HeaderCartButton=(props)=>{
    const cartCtx = useContext(CartContext)
    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{cartCtx.totalAmount}</span>
        </button>
    )

}
export default HeaderCartButton