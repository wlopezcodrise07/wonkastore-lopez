import {useState,createContext,useContext} from 'react';
export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) =>{
    const [cart,setCart] = useState({ items : [],quantity:0});

    const addItem = (item) => {
        const result = cart.items.filter(p => p.idproduct == item.idproduct)
        const cantQuantity=(cart.quantity);
        console.log(cantQuantity)
        if(result.length == 0){
            setCart({...cart,items:[...cart.items, item],quantity:(cantQuantity+item.cant)})
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
        setCart({items:cart.items,quantity:(cantQuantity+item.cant)})
        alert("Se agregó al carrito")
      }

    }

    const clear = () =>{
        setCart({ items : [],quantity:0})
        alert("Se vació el carrito de compra, continúe comprando :)")
    }

    const removeItem = (itemId) =>{
        const item = cart.items.filter(p => p.idproduct == itemId);
        const cantQuantity=(cart.quantity);
        console.log(item[0].cant)
        console.log(cantQuantity)
        console.log(parseInt(cantQuantity-item[0].cant))
        const result = cart.items.filter(p => p.idproduct != itemId);
        setCart({items:result,quantity:parseInt(cantQuantity-item[0].cant)});

    }
    return (
        <CartContext.Provider value={{cart,addItem,clear,removeItem}}>
            {children}
        </CartContext.Provider>
    )
}