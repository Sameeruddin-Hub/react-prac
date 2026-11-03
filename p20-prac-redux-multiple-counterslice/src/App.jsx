import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementbyTwo } from './features/counter/counterSlice'
import { addTocart, deleteItem } from './features/cart/cartSlice'


const App = () => {
  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        Count:{count}


      </div>
      <button onClick={() => { dispatch(increment()) }}>Plus</button>
      <button onClick={() => { dispatch(decrement()) }}>Minus</button>
      <button onClick={() => { dispatch(incrementbyTwo(2)) }}>Plus two</button>
      <button onClick={() => { dispatch(reset()) }}>reset</button>
    </div>
  )
}

export default App