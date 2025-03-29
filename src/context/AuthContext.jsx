import { Children, createContext, useContext
    , useEffect, useState
} from "react";

import {supabase} from "../index";
const AuthContext = createContext();

export const AuthContextProvider =({children}) =>{
    const [user, setUser] = useState([]);
    useEffect(()=>{
        const {data: authListener  } = supabase.auth.onAuthStateChange(
            async(event, session)=> {
                console.log(event, session)
                setUser(session?.user || null);
        })
        return()=>{
            authListener.subscription;
        };
    },[])
    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}
export const UserAuth =()=>{
    return useContext(AuthContext)
}