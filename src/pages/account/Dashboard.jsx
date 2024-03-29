import React from 'react'
import './account.css'

const Dashboard = () => {
  return (
    <div className="container-fluid">
        <div className="row ">
            <div className="col-sm-12">
                <div className='dashboard'>
                    <h4>Dashboard</h4>
                    <p></p>
                    <p className='das-font'>Hello,<span className='text-danger'>Alex Tuntuni</span>( If not <span className='text-danger'>tuntuni !logout)</span></p>
                    <p className='das-font'>From your account dashboard. you can easily check & view your recent orders, manage your shipping and billing addresses and edit your password and account details.

</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard