import HeaderCSS from "./header.module.scss"
import InputBasic from "../../components/inputs/InputBasic.tsx";
import Button1 from "../../components/buttons/Button1.tsx";
const Header = () => {
    return (
        <div className={HeaderCSS.container}>
            <div>Todo App</div>
            <div className={HeaderCSS.search}>
                <InputBasic/>
                <Button1/>
            </div>
            <div>Menu</div>
        </div>
    );
};

export default Header;