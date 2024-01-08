import Search from "../../components/Search/Search.tsx";
import HeaderCSS from "./Header.module.scss"
import DropdownButton from "../../components/ButtonDropdown/DropdownButton.tsx";
import ButtonAuth from "../../components/ButtonAuth/ButtonAuth.tsx";

const Header = ()=>{


    return (<>
        <div className={HeaderCSS.Container}>
            <div>brand</div>
            <Search text="find"> Hain man</Search>
            <div className={HeaderCSS.Settings}>
                <ButtonAuth/>

                <DropdownButton/>
            </div>
        </div>
    </>)
};

export default Header;