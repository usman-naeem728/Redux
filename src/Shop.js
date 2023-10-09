import React from 'react'
import { useDispatch } from 'react-redux'
import { actioncreators } from './state'
import { bindActionCreators } from 'redux'

const Shop = () => {
  const dispatch = useDispatch()
  const {withdrawtMoney, depositMoney} = bindActionCreators(actioncreators,dispatch)
  return (
    <div>
        {/* <button className="btn btn-outline-success" onClick={()=>{dispatch(actioncreators.depositMoney(10))}}>+</button>
        <button className="btn btn-outline-success" onClick={()=>{dispatch(actioncreators.withdrawtMoney(10))}}>-</button>
         */}
        {/* ///with bind action creator */}
        <button className="btn btn-outline-success" onClick={()=>{depositMoney(10)}}>+</button>
        <button className="btn btn-outline-success" onClick={()=>{withdrawtMoney(10)}}>-</button>
        
      
    </div>
  )
}

export default Shop
