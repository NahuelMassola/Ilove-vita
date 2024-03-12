import "./NavBar2.css"
import CartLogo from "../CartLogo/CartLogo";
import { useState } from "react";
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"


const NavBar2 = () => {
    const [ Mobile , setMobile] = useState(false)

    return (
        <>
            <div className="container-fluid title"> 20% OFF EN TRANSFERENCIAS</div>
            <div className="ddd">
            <h1 className='f-futurism titlee'>ILOVE VITA</h1>
            <button className="mobile-menu-icon" onClick={()=> setMobile(!Mobile)}>
                {Mobile ? <ImCross/> : <FaBars/>}
            </button>    
            </div> 
            <nav className="navbar">
                <ul className={Mobile ? "nav-links-mobile" : "nav-links" } onChange={()=>setMobile(true)} >   
                    <a href="/"><li className="navlinks underlinee  f-futurism mb-1">HOME</li></a>
                    <a href="/category/newin"><li className="navlinks underlinee f-futurism mb-1">NEW IN</li></a>
                    <a href="/category/dia"><li className="navlinks underlinee f-futurism mb-1">DIA</li></a>
                    <a href="/category/noche"><li className="navlinks underlinee f-futurism mb-1" >NOCHE</li></a>
                    <a href="/category/abrigos"><li className="navlinks underlinee f-futurism mb-1">ABRIGOS</li></a>
                    <a href="/category/sale"><li className="navlinks underlinee f-futurism mb-1">SALE</li></a>
                    <a href="/cart" className='cart position-absolute end-0 align-items-center justify-content-center d-lg-flex text-dark text-decoration-none'><CartLogo/></a>  
                </ul>
                      
            </nav>
        </>
    )
}

export default  NavBar2;