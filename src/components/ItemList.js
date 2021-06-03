import React,{useEffect,useState} from "react";
import {useParams} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Item';
import data from '../data/productos';

const ItemList = ({}) =>{
    const [products, setProducts] = useState(null);
    const {catId} = useParams();

  useEffect(() => {
    let promise = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(data); 
      }, 500);
    });
    catId ? promise.then(result => {
          setProducts(result.filter(p => p.type === catId));
    })
    : promise.then(result => {
        setProducts(result);
    })
  },[catId])
  ;

    return (
     
            < > 
                {products?.map((product) => (
                    
                    <div className="col-4">
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