import React,{useState} from "react";
import "./App.css";
import Error from "./components/Error";
import Profile from "./components/Profile";
import LoginForm from "./components/LoginForm";
import Auth, { VALIDATION_ERROR, CONNECTION_ERROR } from "./services/Auth";

function App() {
  const [errors, setError] = useState(null)
  const [accept, setForLogin] = useState(null)
  const  SubmitInfo = async(param) =>{
    try{
      const res = await Auth.login(param);
         setForLogin({
            accept: param
          })
      }
      catch(res){
       
        setError({
            errors: res.message
          }) 
      }
 }
  return <React.Fragment>
            Hello from login
            <LoginForm submit={SubmitInfo} />
            {(errors.errors === "VALIDATION_ERROR") ? <LoginForm submit={SubmitInfo} error={errors.errors} /> : <Profile />} 
            {(errors.errors === "CONNECTION_ERROR") ? <Error /> : null} 
        </React.Fragment>;
}

export default App;
