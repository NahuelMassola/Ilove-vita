import { Link } from "react-router-dom"
import './Footer.css'
import { px } from "framer-motion"

const Footer = () => {
    return (
        <footer className="footer ">
            <div className="wrapper ">
                <div className="col-md-6 col-sm-6 ">
                <h5 className="f-futurism text-white h1 title">I LOVE VITA</h5>
                    <p className="small text-white">Bienvenido a I LOVE VITA, tu mejor selección de ropa. 
                    Estamos dedicados a brindarte lo mejor de la ropa.</p>
                </div>
                <div className="col-md-10 col-sm-12 ">
                <h2 className="text-white f-futurismL mb-3 mt-2 text-center">Navegar</h2>
                    <div className="d-flex justify-content-center">
                    <div className="links">
                        <ul className="text-center col-sm-6">
                            <li><Link to='/' className='link '><u>HOME</u></Link></li>
                            <li><Link to='/category/Sale' className='link'><u>NEW IN</u></Link></li>
                            <li><Link to='/category/Buzo' className='link'><u>DIA</u></Link></li>
                        </ul>
                    </div>
                    <div>
                    <ul className="text-center " >
                            <li><Link to='/category/Pantalon' className='link'><u>ABRIGOS</u></Link></li>
                            <li><Link to='/category/Remera' className='link'><u>NOCHE</u></Link></li>
                            <li><Link to='/category/Remera' className='link'><u>CARRITO</u></Link></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="col-md-12 col-sm-12">
                <h5 className="text-white mb-2 Newsletter">Newsletter</h5>
                    <div className="">
                        <p className="small text-white">Suscribite a nuestro Newsletter para recibir nuestras noticias y ofertas en todos lados.</p>
                        <form action="#">
                            <div className="input-group mb-3">
                                <input className="form-control" type="text"  placeholder="Ingresa tu mail" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i></button>
                            </div>
                        </form>
                    </div>
                    <div className="d-flex align-items-center">
                        <h5 className="text-light me-2">Seguinos en nuestras redes: </h5>
                        <i className="fa-brands fa-whatsapp fa-xl text-light mx-1"></i>
                        <i className="fa-brands fa-facebook fa-xl text-light mx-1"></i>
                        <i className="fa-brands fa-instagram fa-xl text-light mx-1"></i>
                    </div>
                </div>
            </div>
            <p className="text-center text-white mb-0">&copy; Nahuel Dellacecca. All rights reserved.</p>
        </footer>
    )
}

export default Footer
