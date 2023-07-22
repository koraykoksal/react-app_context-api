import { useContext } from "react"
import { createContext } from "react"

//! Login Context'i olusuturuldu
export const LoginContext = createContext()

//sarmalayıcı bir component oluşturuldu.
//react da her componentin children adında bir propsuv vardır.

const values={
    user,
    setUser,
}

export const LoginProvider = ({children}) => {


  return (

    <LoginContext value={{values}}>
        {children}
    </LoginContext>
  )
}

export const useLoginContext=()=>{
    return useContext(LoginContext)
}
