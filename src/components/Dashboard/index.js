import React from 'react'
import './dashboard.css'
import { FiLogOut } from 'react-icons/fi'

function DashBoard({updateUser}) {

    const data = JSON.parse(localStorage.getItem("UserData"))

    return (
        <React.Fragment>
            <div className="navbar">
                <p>Welcome to IITR</p>
                <h2 className="dash_name">Hello {data.First_Name}!&nbsp;&nbsp;&nbsp;<div className="logout" onClick={() => updateUser({})}><FiLogOut /></div></h2>
            </div><br/>
            <div className="detail_head">
                <h2><u>Personal Details</u></h2>
            </div>
            <div className="details">
                <div className="left_detail">
                    <p>First Name:</p>
                    <p>Last Name:</p>
                    <p>Email:</p>
                    <p>Contact No.:</p>
                    <p>Branch:</p>
                    <p>Password:</p>
                </div>
                <div className="right_detail">
                    <p>{data.First_Name}</p>
                    <p>{data.Last_Name}</p>
                    <p>{data.Email}</p>
                    <p>{data.Contact}</p>
                    <p>{data.Branch}</p>
                    <p>{data.Password}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default DashBoard
