import  {JSX} from "react";

import LoginCSS from "./Login.module.scss";
import BrandName from "../BrandName/BrandName.tsx";
import { useNavigate} from "react-router-dom";


export default function Login():JSX.Element{
const Active = false;
const Size = "5";
const navigate = useNavigate()
function handleLogin(e){
    e.preventDefault()

     setTimeout(()=>{
             navigate("/")
     }
         ,2000
    )
    console.log("naclick")
}
    return(
        <>
            <div className={LoginCSS.container}>
                <BrandName isActive={Active} size={Size}/>
                <form className={LoginCSS.form}>
                    <input type="text" name=""/>
                    <input type="password"  name="" />

                    <button className={LoginCSS.loginButton} onClick={handleLogin}>Login</button>
                </form>
                    <p>Forgot password</p>
            </div>
        </>
    )
}