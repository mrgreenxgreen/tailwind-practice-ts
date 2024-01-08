import BrandNameCSS from "./BrandName.module.scss"

export default function BrandName({isActive,size} :{isActive:boolean,size:string}) {

    return (<>


        <h1 className={`${BrandNameCSS.design} ${isActive &&BrandNameCSS.active}`} > AQUA PARK</h1>
    </>)
}

