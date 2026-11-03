import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByten } from './features/counter/counterSlice'



const App = () => {

  const { count } = useSelector((state) => state.counter)
  console.log(count)
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        Count:{count}
      </div>
      <div className='flex gap-6'>
        <button onClick={() => { dispatch(increment()) }}>+</button>
        <button onClick={() => { dispatch(decrement()) }}>-</button>
        <button onClick={() => { dispatch(reset()) }}>reset</button>
        <button onClick={() => { dispatch(incrementByten(10)) }}>add by 10</button>


      </div>
    </div>
  )
}

export default App