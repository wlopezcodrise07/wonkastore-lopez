import React,{useEffect,useState} from "react";
import {useParams} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail from './ItemDetail'
import data1 from '../data/productos';
import {getFirestore} from '../firebase';
const ItemDetailContainer = () =>{
    const [detalle, setDetalle] = useState(null);
    const {id} = useParams();

    useEffect(() => {
      const db = getFirestore();
      const itemsCollection = db.collection("products");
        const item = itemsCollection.doc(id);
        const docs = [];
        item.get().then((doc) => {
          if(!doc.exists){
            console.log('No resultados!')
          }
            docs.push({id:doc.id,...doc.data()})
     
          setDetalle(docs);
         })  

  
    }
    ,[id])
  ;

  return (
     
    < > 
          
        {detalle?.map((x) => (
                    <ItemDetail 
                        idproduct={x.id}
                        name={x.name}
                        price={x.price}
                        img={x.description}
                        detail={x.detail}
                        stock={x.stock}
                        type={x.type}
                    />
                ))}
    </>
   
      
)
}
  export default ItemDetailContainer