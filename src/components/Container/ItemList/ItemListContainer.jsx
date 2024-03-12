import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore , collection , getDocs, query, where } from "firebase/firestore"
import IitemList from "./ItemList";
import Loader from "../Item/Loader";
import "./Style.css"

const ItemListContainer = () => {
    const [ items , setItems] = useState([]); 
    const [ loading , setLoading] = useState(true)
    const [ error , setError] = useState(false)
    const { id } = useParams();
    
    useEffect(() =>{
        const db = getFirestore();
        const itemCollection = collection(db,"items");
        const queryItems = id ? query(itemCollection , where( "categoria" , "==" , id )) : itemCollection
            getDocs(queryItems).then((snapShot) => {
                setItems(snapShot.docs.map((item) => ({id : item.id , ...item.data()})))
                setLoading(false)
                setError()
            });
    }  , [id]);
    
    
    return (
      <>
      <div className="tileContainer">
        <h1 className="mb-3 mt-5">NUESTROS PRODUCTOS</h1>
      </div>
      <div  className="container">
      {
        loading ? (
          <Loader />
            ) : (
            error ? (
              <h1>Were sorry, something went wrong...</h1>) : (<IitemList items={items} />
      ))}
      </div>
        </>
        );
};

export default ItemListContainer;


