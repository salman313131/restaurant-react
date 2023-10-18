import {useState} from 'react'
const Header=()=>{
    const [item,setItem] = useState(0)
    const increase=()=>{
        setItem(prevState=>prevState+1)
    }
    return(
        <>
            <div>
                <h3>React Meals</h3>
                <div>
                <h3>{item}</h3>
                <button onClick={increase}>Increase</button>
                </div>
            </div>
        </>
    )
}
export default Header;