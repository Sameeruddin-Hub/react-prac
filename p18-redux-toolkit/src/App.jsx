
import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from './features/counter/counterSlice.jsx'

const App = () => {

  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex flex-col p-8">
        <div> Count:{count}
        </div>
        <div className="flex justify-start items-start flex-col gap-3">
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
      </div>

    </>



  )
}

export default App