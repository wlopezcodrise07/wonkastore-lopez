import React,{useEffect,useState} from "react";
import {useParams} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Item';
import Cargando from './Cargando';
import {getFirestore} from '../firebase';
const ItemList = ({}) =>{
    const [products, setProducts] = useState(null);
    const {catId} = useParams();
    const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    const db = getFirestore();
    const itemsCollection = db.collection("products");
    const docs = [];
    if (catId) {
      const itemsFiltered = itemsCollection.where('type','==',catId);
      itemsFiltered.get().then((snapshot) => {
        if(snapshot.size ===0){
          console.log('No resultados!')
        }
        snapshot.forEach((doc)=>{
          docs.push({id:doc.id, ...doc.data()})
        })
        setProducts(docs)
       })
       .finally(()=>{
         setLoading(false);
       }) ;
    }else{
      itemsCollection.get().then((snapshot) => {
        if(snapshot.size ===0){
          console.log('No resultados!')
        }
        snapshot.forEach((doc)=>{
          docs.push({id:doc.id, ...doc.data()})
        })
        setProducts(docs)
       })        
       .finally(()=>{
        setLoading(false);
      }) ; 
    }

  }
  ,[catId])
;

    return (
     
            < > 
                {loading&&
                <center><Cargando/></center>
                }
                {products?.map((product) => (
                    
                    <div className="col-md-4">
                      <Item 
                    name={product.name}
                    id={product.id}
                    img={product.description}
                    />
                    <br />
                </div>
                ))}
            </>
           
              
        )
}
  export default ItemList