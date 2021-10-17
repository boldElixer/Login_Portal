import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/sparkiitrDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Database Connected!!!")
})

const userSchema = new mongoose.Schema({
    First_Name: String,
    Last_Name: String,
    Email: String,
    Branch: String,
    Contact: Number,
    Password: String
})

const User = new mongoose.model("User", userSchema)

app.post("/login", (req, res) => {
    const { Email, Password } = req.body
    User.findOne({ Email: Email }, (err, user) =>{
        if(user){
            if(Password === user.Password){
                res.send({ message: "Login Successful", user: user})
            }
            else{
                res.send({ message: "Incorrect Password" })
            }
        }
        else{
            res.send({ message: "User not registered" })
        }
    })
})

app.post("/register", (req, res) => {
    const { First_Name, Last_Name, Email, Branch, Contact, Password } = req.body
    User.findOne({ Email: Email }, (err, user) => {
        if(user){
            res.send({ message: "User already registered" })
        }
        else{
            const user = new User({
                First_Name,
                Last_Name,
                Email,
                Branch,
                Contact,
                Password
            })
            user.save(err => {
                if(err){
                    res.send(err)
                }
                else{
                    res.send({ message: "Registration Successful, Please Login now!!" })
                }
            })
        }
    })
})

app.listen(9002, () => {
    console.log("Started at port 9002")
})