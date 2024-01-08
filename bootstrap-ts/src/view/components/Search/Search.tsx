import SearchCSS from "./Search.module.scss"
import {ReactElement} from "react";


const Search = ({text,children} ,{text:string, children:ReactElement})=>{

    return (<>
        <div className={SearchCSS.design}>
            <input type="text" placeholder={text}/>
            {children}
        </div>
    </>)
}

export default Search;