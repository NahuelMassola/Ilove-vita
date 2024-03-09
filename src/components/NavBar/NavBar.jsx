import {Navbar  , Nav  } from 'react-bootstrap'
import { Link , NavLink} from 'react-router-dom'
import './NavBar.css'
import CartLogo from '../CartLogo/CartLogo'


const NavBar = () => {
    return (
        <>  
            <div className='navbarContainer'>
            <div className='containerTransferencia'> 20% OFF TRANSFERENCIA BANCARIA </div>
            <div className='containerTitle'>
                    {/* Link a Home */}
                    <Link to='/' className='linkTitle'><Navbar.Brand as={'div'} className='f-futurism d-none d-lg-inline'>I LOVE VITA</Navbar.Brand></Link>
            </div>
            <Nav className="navbarMenu">
                <NavLink to='/' className='navLink underline f-futurism'>HOME</NavLink>
                <NavLink to='/category/NewIn' className='navLink underline f-futurism'>NEW IN</NavLink>
                <NavLink to='/category/Dia' className='navLink underline f-futurism'>DIA</NavLink>
                <NavLink to='/category/Noche' className='navLink underline f-futurism'>NOCHE</NavLink>
                <NavLink to='/category/Abrigos' className='navLink underline f-futurism'>ABRIGOS</NavLink>
                <NavLink to='/category/Sale' className='navLink underline f-futurism'>SALE</NavLink>
                <Link to='/cart' className='cart position-absolute end-0 align-items-center justify-content-center d-none d-lg-flex text-dark text-decoration-none'><CartLogo/></Link>
            </Nav>
            </div>
        </>
    )
}

export default NavBar
