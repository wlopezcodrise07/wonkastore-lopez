import {useState,createContext,useContext} from 'react';
import { getFirestore } from '../firebase';
import firebase from "firebase/app";
import "firebase/firestore";
export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) =>{
    const [cart,setCart] = useState({ items : [],quantity:0,total:0});

    const addItem = (item) => {
        const result = cart.items.filter(p => p.idproduct == item.idproduct)
        const cantQuantity=(cart.quantity);
        const total=(cart.total);
        console.log(cantQuantity)
        if(result.length == 0){
            setCart({...cart,items:[...cart.items, item],quantity:(cantQuantity+item.cant),total:(total+(item.price*item.cant))})
            console.log(item.cant)
            alert("Se agregó al carrito");
      }else{
        cart.items.forEach(
            function (elemento) {
              if (elemento['idproduct']== item.idproduct) {
                  elemento['cant'] = elemento['idproduct'] == item.idproduct ? elemento['cant']+item.cant : elemento['cant'];
              } 
          }
        )
        setCart({items:cart.items,quantity:(cantQuantity+item.cant),total:(total+(item.price*item.cant))})
        alert("Se agregó al carrito")
      }

    }

    const clear = () =>{
        setCart({ items : [],quantity:0,total:0})
    }

    const removeItem = (itemId) =>{
        const item = cart.items.filter(p => p.idproduct == itemId);
        const cantQuantity=(cart.quantity);
        const total=(cart.total);

        console.log(item[0].cant)
        console.log(cantQuantity)
        console.log(parseInt(cantQuantity-item[0].cant))
        const result = cart.items.filter(p => p.idproduct != itemId);
        setCart({items:result,quantity:parseInt(cantQuantity-item[0].cant),total:(total-(item[0].price*item[0].cant))});

    }

    const uploadOrder = () => {
        const productos = [];
        cart.items.forEach((i)=>{
            productos.push({id:i.idproduct,name:i.name,cant:i.cant,price:i.price})
        })
        const db = getFirestore();
        const ordersCollections = db.collection("orders");

        const Order = {
            buyer: { name: "William", phone: "+51 962769588", email:"william.lopez@gmail.com"},
            items : productos,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: cart.total
        }
        console.log(Order)
        ordersCollections.add(Order).then((response) => {
            console.log(response)
            clear();
            alert('Gracias, el ID de tu compra es '+response.id+' :)')
        })
    }
    return (
        <CartContext.Provider value={{cart,addItem,clear,removeItem,uploadOrder}}>
            {children}
        </CartContext.Provider>
    )
}