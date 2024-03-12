/* eslint-disable react/prop-types */

import Item from "../Item/Item";
import "./Style.css"

const IitemList = ({items}) => {
    
    return (
            <div className="row ">
                <div className="cardd">
                {items.map(items =>
                <div key={items.id} >
                    <div >
                    <Item  id={items.id} nombre={items.nombre} imagen={items.imagen} precio={items.precio} />
                    </div>
                </div>)}
            </div>
            </div>
    )
}

export default IitemList;