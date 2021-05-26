import React,{useEffect,useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Item';

const ItemList = ({verDetalle}) =>{
    const [products, setProducts] = useState(null);

const data = 
[
  {
    "id":1,
    "name":"Torta de Chocolate",
    "price" : "2.00",
    "description":"https://www.pngjoy.com/pngm/11/11885697_chocolate-torta-de-chocolate-png-png-download.png",
    "detail" : "",
    "stock" : "8"
  },
  {
    "id":2,
    "name":"Empanadas",
    "price" : "1.50",
    "description":"https://www.vhv.rs/dpng/d/113-1136611_empanadas-de-pollo-png-transparent-png.png",
    "detail" : "",
    "stock" : "0"
  },
  {
    "id":3,
    "name":"Alfajores",
    "price" : "2.00",
    "description":"https://www.pngjoy.com/pngm/402/7396186_dulces-alfajor-de-dulce-de-leche-png-hd.png",
    "detail" : "",
    "stock" : "9"
  },
  {
    "id":4,
    "name":"Torta Tres Leches",
    "price" : "2.50",
    "description":"data:image/jpeg;base64,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",
    "detail" : "",
    "stock" : "10"
  },
]
let promise = new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(data); 
    }, 2000);
  });
  
  promise.then(
    function (value) {
        setProducts(data);
    }
  );

    return (
     
            < > 
                {products?.map((product) => (
                    <Item 
                        idproduct={product.id}
                        name={product.name}
                        price={product.price}
                        img={product.description}
                        detail={product.detail}
                        stock={product.stock}
                        verDetalle={verDetalle}
                    />
                ))}
            </>
           
              
        )
}
  export default ItemList