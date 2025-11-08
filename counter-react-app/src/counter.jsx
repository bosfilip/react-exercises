import React, {useState} from 'react'

function Counter(){

    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1)
    }
    const decrease = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }

    function setCountValue(event){
        setCount(event.target.value)
    }
    
    return(
        <div>
            <input value={count} onChange={setCountValue}></input>
            <button className='' onClick={decrease}>-</button>
            <button className='' onClick={reset}>reset</button>
            <button className='' onClick={increase}>+</button>
        </div>
    )
}

export default Counter