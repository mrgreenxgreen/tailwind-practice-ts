import  {JSX} from "react";

import LoginCSS from "./Login.module.scss";


export default function Login():JSX.Element{

    return(
        <>
            <div className={LoginCSS.container}>
                LOGIN
                <form className={LoginCSS.form}>
                    <input type="text" name=""/>
                    <input type="password"  name="" />

                    <button>Login</button>
                </form>
            </div>
        </>
    )
}