

import MainCSS from "./Main.module.scss"
import { ReactElement} from "react";

const Main= ({children}: ReactElement)=>{

    return(<>
        <div className={MainCSS.container}>
            {children}
        </div>
    </>)
}

export default Main;