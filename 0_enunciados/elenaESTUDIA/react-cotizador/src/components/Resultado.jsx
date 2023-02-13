import { useRef } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { MARCAS, PLANES } from "../constants";
import useCotizador from "../hooks/useCotizador";

export const Resultado = () => {
    const { resultado, datos } = useCotizador()
    const {marca, plan, anio} = datos;
    const yearRef = useRef(anio)

    const [nombreMarca] = useMemo( () =>
        MARCAS.filter(m => m.id === Number(marca)), 
        [resultado]
    )
    const [nombrePlan] = useMemo( () => 
        PLANES.filter(p => p.id === Number(plan)),
        [resultado]
    )

    if (resultado == '') return null

    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-700 font-black text-3xl">
                Resumen
            </h2>
            <p className="my-2">
                <span className="font-bold">Marca: </span>{nombreMarca.nombre}
            </p>
            <p className="my-2">
                <span className="font-bold">Plan: </span>{nombrePlan.nombre}
            </p>
            <p className="my-2">
                <span className="font-bold">Año: </span>{yearRef.current}
            </p>
            <p className="my-2 text-2xl">
                <span className="font-bold">Total Seguro:</span>{resultado}
            </p>
        </div>
    )


}