/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Style.css"

// Componente Item //
const Item = ( {id, nombre , precio, imagen} ) => {
    return (
            <div className="container item-card">
                <Link to={"/item/" + id}><img className="img-card"  src={"/ImagesCard/" + imagen} alt="Fotos Productos"></img></Link>
                <div className="row text-center">
                    <div >
                        <p className="img-name">{nombre}</p>
                    </div>
                    <div className="text-card">
                        <p className="text-precio">${precio}</p>
                        <Link to={"/item/" + id} className="img-precio">
                            <button className="btn-comprar">COMPRAR</button>
                        </Link>
                    </div>
                </div>
            </div> 
    );
}


export default Item;