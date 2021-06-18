import React,{useEffect,useState} from "react";
import {useParams} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Item';
import {getFirestore} from '../firebase';
const ItemList = ({}) =>{
    const [products, setProducts] = useState(null);
    const {catId} = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = db.collection("products");
    if (catId) {
      const itemsFiltered = itemsCollection.where('type','==',catId);
      itemsFiltered.get().then((snapshot) => {
        if(snapshot.size ===0){
          console.log('No resultados!')
        }
        setProducts(snapshot.docs.map(doc => doc.data()))
       })  
    }else{
      itemsCollection.get().then((snapshot) => {
        if(snapshot.size ===0){
          console.log('No resultados!')
        }
        setProducts(snapshot.docs.map(doc => doc.data()))
       })  
    }

  }
  ,[catId])
;

    return (
     
            < > 
                {products?.map((product) => (
                    
                    <div className="col-md-4">
                      <Item 
                    name={product.name}
                    img={product.description}
                    />
                    <br />
                </div>
                ))}
            </>
           
              
        )
}
  export default ItemList