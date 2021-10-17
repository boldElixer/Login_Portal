import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './homepage.css'
import login_image from '../../assets/login.svg'
import axios from 'axios'
import { useHistory } from "react-router-dom"

function Homepage({updateUser}) {

    const history = useHistory()

    const [ user, setUser ] = useState({
        Email: "",
        Password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            updateUser(res.data.user)
            history.push("/dashboard")        
        })
    }

    return (
        <div className="home_style">
            <div className="main_login">
                <div className="left_login">
                    <img className="login_image" src={ login_image } alt="" />
                </div>
                <div className="right_login">
                    Welcome Back!
                    <div className="login_form">
                        <input name="Email" placeholder="Email" type="email" value={user.Email} className="input_field" oninput="validity.valid||(value='');" onChange={handleChange}/>
                        <input name="Password" placeholder="Password" type="password" value={user.Password} className="input_field" onChange={handleChange}/>
                        <Link to="/reset" className="reset">Forgot Password?</Link>
                        <button className="input_field login_button" onClick={login}>LOGIN</button>
                    </div>
                    <p>Don't have an account? <div className="register" onClick={() => history.push("/registration")}>Sign up</div></p>
                </div>
            </div>
        </div>
    )
}

export default Homepage
