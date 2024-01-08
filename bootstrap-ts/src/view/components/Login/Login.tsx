import  {JSX} from "react";

import LoginCSS from "./Login.module.scss";
import BrandName from "../BrandName/BrandName.tsx";


export default function Login():JSX.Element{
const Active = false;
const Size = "5";
function handleLogin(event){
    event.preventDefault();
     setTimeout(
        ()=>{console.log("hello")}, 2000
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