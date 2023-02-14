import { createContext, useState } from "react";
import { calcularMarca, calcularPlan, formatearDinero, obtenerDiferenciaYear } from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({children}) => {

    const handleChangeDatos = e => { 
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const [datos, setDatos] = useState({
        marca: '',
        anio: '',
        plan: ''
    })

    const [error, setError] = useState('')
    const [resultado, setResultado] = useState('')
    const [cargando, setCargando] = useState(false)
    
    const cotizarSeguro = () => {
        let resultado = 200
    
        const diferencia = obtenerDiferenciaYear(datos.anio)
        resultado -= resultado * diferencia * 0.03

        resultado *= calcularMarca(datos.marca)

        resultado *= calcularPlan(datos.plan)

        resultado = formatearDinero(resultado)

        setCargando(true)
        
        setTimeout(() => {
            setResultado(resultado)
            setCargando(false)
        }, 3000)
    }

    return (
        <CotizadorContext.Provider value={{datos, handleChangeDatos, error, setError, cotizarSeguro, resultado, cargando}}>
            {children}
        </CotizadorContext.Provider>
    )

    
}



export {
    CotizadorProvider
}

export default CotizadorContext