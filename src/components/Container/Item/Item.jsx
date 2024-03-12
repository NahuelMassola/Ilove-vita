/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Style.css"
import {Card, CardFooter, Button} from "@nextui-org/react";
import { FaBagShopping } from "react-icons/fa6";

// Componente Item //
const Item = ( {id, nombre , precio, imagen} ) => {
    return (
            <div className="container mt-2">
                <Link to={"/item/" + id}>
                <Card isFooterBlurred radius="lg" className="border-none">
                    <img
                        alt="Woman listing to music"
                        className="object-cover"
                        src={"/ImagesCard/" + imagen}
                        />
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 ">
                        <p className="text-tiny text-black/80 d-flex nombre">{nombre}</p>
                        <p className="precio"> ${precio}</p>
                        <Button className="text-tiny text-white bg-black/100" variant="flat" color="default" radius="lg" size="sm">
                             <p className="comprar">Comprar</p> <p className="bag"><FaBagShopping/></p>
                        </Button>
                    </CardFooter>
                </Card>
                </Link>
            </div> 
    );
}


export default Item;


{/* <Link to={"/item/" + id}><img className="img-card"  src={"/ImagesCard/" + imagen} alt="Fotos Productos"></img></Link>
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
                </div> */}