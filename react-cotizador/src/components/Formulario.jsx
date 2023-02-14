import React, { Fragment } from "react"
import { MARCAS, YEARS, PLANES } from "../constants/index"
import CotizadorContext from "../context/CotizadorProvider"
import useCotizador from "../hooks/useCotizador"
import Error from "./Error"

const Formulario = () => {

    const { datos, handleChangeDatos, error, setError, cotizarSeguro } = useCotizador()

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.values(datos).includes('')) {
            setError('Rellena todos los campos')
            return
        }
        setError('')

        cotizarSeguro()
    }

    return (<>
        {error && <Error/>}
        <form onSubmit={handleSubmit}>
            <div className="my-5">
                <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">MARCA</label>
                <select name="marca" id="marca" className="w-full p-3 bg-white border border-gray-200" onChange={e => handleChangeDatos(e)} value={datos.marca}>
                    <option value="">-- Selecciona Marca --</option>
                    {MARCAS.map(marca => (
                        <option key={marca.id} value={marca.id}>{marca.nombre}</option>
                    ))}
                </select>   
            </div>
            <div className="my-5">
                <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">AÑO</label>
                <select name="anio" id="anio" className="w-full p-3 bg-white border border-gray-200" onChange={e => handleChangeDatos(e)} value={datos.anio}>
                    <option value="">-- Selecciona Año --</option>
                    {YEARS.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>   
            </div>

            <div className="my-5">
                <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">Selecciona un plan</label>
                <div className="flex gap-3 items-center">
                    {PLANES.map(plan => (
                        <Fragment key={plan.id}>
                            <label>{plan.nombre}</label>
                            <input type="radio" name="plan" value={plan.id} onChange={e => handleChangeDatos(e)}></input>
                        </Fragment>
                    ))}
                </div>
            </div>
            <input type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold" value="Cotizar"/>

        </form>



    
    
    </>)
}

export default Formulario