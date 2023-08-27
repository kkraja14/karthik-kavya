import { useDispatch , } from "react-redux";
import { useSelector } from "react-redux";
import { decrement,increament,selectCount } from "./CounterRedux"

function Counter(){
    const dispatch = useDispatch();
    const data = useSelector(selectCount)
    return(
        <div>
            incre
            <button onClick={()=>dispatch(decrement())}>-</button>
            <p>{data}</p>
            <button onClick={()=>dispatch(increament())}>+</button>
        </div>
    )
}

export default Counter;