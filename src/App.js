import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from './components/Homepage';
import Registration from './components/Registration';
import DashBoard from './components/Dashboard';

function App() {

  const [ user, setLoginUser ] = useState({})

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("UserData")))
  }, [])

  const updateUser = (user) => {
    localStorage.setItem("UserData", JSON.stringify(user))
    setLoginUser(user)
  }

  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route path="/dashboard">
            {
              user && user._id ? <DashBoard updateUser={updateUser} /> : <Homepage updateUser={updateUser} />
            }
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/">
            <Homepage updateUser={updateUser}/>
          </Route>
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
