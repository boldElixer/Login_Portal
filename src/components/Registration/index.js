import React, { useState } from 'react'
import './registration.css'
import axios from 'axios'
import { useHistory } from "react-router-dom"

function Registration() {

    const history = useHistory()

    const [ user, setUser ] = useState({
        First_Name: "",
        Last_Name: "",
        Email: "",
        Branch: "",
        Contact: "",
        Password: "",
        CPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { First_Name, Last_Name, Email, Branch, Contact, Password, CPassword } = user
        if( First_Name && Last_Name && Email && Branch && Contact && Password && (Password === CPassword) ){
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
                history.push("/")
            })
        }
        else{
            alert("Invalid Input")
        }
    }

    return (
        <div className="home_style">
            {console.log("User", user)}
            <div className="regis_page">
                <h1>Registration</h1>
                <div className="login_form registration">
                    <input name="Email" placeholder="Email" type="email" value={user.Email} className="input_field" oninput="validity.valid||(value='');" onChange={handleChange}/>
                    <input name="Contact" placeholder="Contact Number" type="text" maxlength="10" pattern="\d{10}" oninput="validity.valid||(value='');" value={user.Contact} className="input_field" onChange={handleChange}/>
                    <span>
                        <input name="First_Name" placeholder="First Name" type="text" value={user.First_Name} className="input_field name_field" onChange={handleChange}/>
                        <input name="Last_Name" placeholder="Last Name" type="text" value={user.Last_Name} className="input_field name_field" onChange={handleChange}/>
                    </span>
                    <input name="Branch" placeholder="Branch" type="text" value={user.Branch} className="input_field" onChange={handleChange}/>
                    <input name="Password" placeholder="Password" type="password" value={user.Password} className="input_field" onChange={handleChange}/>
                    <input name="CPassword" placeholder="Confirm Password" type="password" value={user.CPassword} className="input_field" onChange={handleChange}/>
                    <button className="input_field login_button" onClick={register}>SIGN UP</button>
                    <p>Already have an account? <div className="register" onClick={() => history.push("/")} >Sign in</div></p>
                </div>
            </div>
        </div>
    )
}

export default Registration
