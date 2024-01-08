import Button2CSS from "./Button2.module.scss"

const Button2 = (text)=>{

    return(
        <>
            <button className={Button2CSS.design}>
                {text.children}
            </button>

        </>
    )
}

export default Button2;