import React from 'react'
import { useDispatch } from 'react-redux'
import { actioncreators } from './state'

const Shop = () => {
  const dispatch = useDispatch()
  return (
    <div>
        <button className="btn btn-outline-success" onClick={()=>{dispatch(actioncreators.depositMoney(10))}}>+</button>
        <button className="btn btn-outline-success" onClick={()=>{dispatch(actioncreators.withdrawtMoney(10))}}>-</button>
      
    </div>
  )
}

export default Shop
