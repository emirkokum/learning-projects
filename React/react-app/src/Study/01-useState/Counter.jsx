import { useState } from "react"

const Counter = () => {
    const[count, setCount] = useState(0);
  
    return (
    <div>
        <p>Sayı : {count} </p>
        <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
        <button onClick={() => setCount(prev => prev - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Restart</button>
    </div>
  )
}

export default Counter