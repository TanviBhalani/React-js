import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../features/CounterSlice';

export default function Counter() {
    const count = useSelector((state)=> {
        return state.CounterKey.count
    })

    const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button onClick={()=> dispatch(decrement ())}>-</button>
    </div>
  )
}
