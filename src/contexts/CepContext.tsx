import { createContext } from 'react'
import { CepProps, ContextCepProps } from '../types'
import { useState } from 'react'
import Cep from '../services/Cep'

export const CepContext = createContext({} as ContextCepProps)

export function CepProvider({children}: any){
    const [cep, setCep] = useState<CepProps|null>(null)
    const cepHandle = async (nro:string) => {
        const response = await Cep.getCep(nro)
        setCep(response)
    }
    return (
        <CepContext.Provider value={{cep, cepHandle}}>
            {children}
        </CepContext.Provider>
    )
}