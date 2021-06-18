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
        const itemFiltered = itemsCollection.where('name','==',id.replace(/-/g,' '));
        itemFiltered.get().then((snapshot) => {
          if(snapshot.size ===0){
            console.log('No resultados!')
          }
          setDetalle(snapshot.docs.map(doc => doc.data()))
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