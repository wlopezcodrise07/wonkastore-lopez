import {useState,createContext,useContext} from 'react';
export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) =>{
    const [cart,setCart] = useState({ items : [],quantity:0});

    const addItem = (item) => {
        const result = cart.items.filter(p => p.idproduct == item.idproduct)
        if(result.length == 0){
            setCart({...cart,items:[...cart.items, item],quantity:(cart.items.length+1)})
            alert("Se agregó al carrito");
      }else{
          alert("Por favor seleccione otro artículo")
      }
    console.log(cart)

    }

    return (
        <CartContext.Provider value={{cart,addItem}}>
            {children}
        </CartContext.Provider>
    )
}