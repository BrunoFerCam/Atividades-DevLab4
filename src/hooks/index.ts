import { useContext } from 'react'
import { CepContext } from '../contexts/CepContext'

export default function useCep() {
    const context = useContext(CepContext)
    return context
}