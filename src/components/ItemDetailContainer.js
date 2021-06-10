import React,{useEffect,useState} from "react";
import {useParams} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail from './ItemDetail'
import data1 from '../data/productos';
const ItemDetailContainer = () =>{
    const [detalle, setDetalle] = useState(null);
    const {id} = useParams();
    useEffect(() => {
      let promise = new Promise((resolve, reject) => {
        setTimeout(function () {
          resolve(data1); 
        }, 500);
      });
      id ? promise.then(result => {
        setDetalle(result.filter(p => p.name.replace(/[^\w ]+/g,'').replace(/ +/g,'-') == id));
      })
      : promise.then(result => {
        setDetalle(result.filter(p => p.name.replace(/[^\w ]+/g,'').replace(/ +/g,'-') == id));
      })
    },[id])


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