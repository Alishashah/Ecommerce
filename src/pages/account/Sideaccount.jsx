import React from 'react'
import { NavLink} from 'react-router-dom'
import './account.css'

const Sideaccount = () => {
  return (
    <>
  <div className='mt-5'>

        <NavLink to='' className=" box-div-color nav-color">
            Dashboard
        </NavLink>

        <NavLink to='successfull' className=" box-div-color nav-color">
            Orders
        </NavLink>


        <NavLink to='downloads' className=" box-div-color nav-color">
            Downloads
        </NavLink>

        <NavLink to='payment' className=" box-div-color nav-color">
            Payment Method
        </NavLink>


        <NavLink to='addresspayment' className=" box-div-color nav-color">
            Address
        </NavLink>

        <NavLink to='accountdetails' className=" box-div-color nav-color">
            Account details
        </NavLink>

        <NavLink to='/login' className=" box-div-color nav-color">
           Logout
        </NavLink>
  </div>
  </>
  )
}

export default Sideaccount