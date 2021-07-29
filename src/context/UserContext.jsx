import { createContext, useContext, useEffect, useState } from "react";


const UsuarioContext = createContext();

export const UsuarioProvider =(props) => {
    const [login, setLogin] = useState(false);

    useEffect(()=>{
        if(sessionStorage.getItem('login') === 'true'){
            setLogin(true)
        } else {
            setLogin(false)
        }
    },[]);
    
    const value = {
        login, setLogin,
    };
    return <UsuarioContext.Provider value = {value} {...props}/>;
};

export function useUsuario(){
    const context = useContext(UsuarioContext)
    if(!context){
        throw new Error('UseUsuario debe estar dentro del proveedor usuarioProvider')
    }
    return context;
}