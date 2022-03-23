import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateData ,limpiarData } from '../../feutures/dataClientSlice/dataClientSlice'
import { getDataAdmin, updateDataAdmin } from '../../feutures/DataAdminSlice/dataAdminSlice'
import './card-detalles.scss'


const CardDetalles = () => {
let { dataClient } = useSelector(state => state.dataClient)
const { dataAdmin } = useSelector(state => state.dataAdmin)

const [datosCargados, setDatosCargados] = useState({})
const dispatch = useDispatch()
    if(dataClient.length === 0 || dataClient.length <5){
        return (
            <div>
                <h2>Agregue ingredientes para la pizza (minimo 5 ingredientes)</h2>
            </div>
        )
    }
    else{

        const ingredientesPizza = dataClient 
        let costeTotalPizza = 0
        dataClient.forEach (function(ingredienteElement){
            costeTotalPizza += ingredienteElement.coste;
        });
        const LimpiarDatos = () => {
            nombres: document.getElementById("nombres").value = ""
            apellidos: document.getElementById("apellidos").value = ""
            direccion: document.getElementById("direccion").value = ""
            celular: document.getElementById("celular").value = ""
            nombrepizza: document.getElementById("nombrepizza").value = ""
            dispatch(limpiarData([]))
        }
         const handlePizza = () => {

            const datosCompra = {
                nombres: document.getElementById("nombres").value,
                apellidos: document.getElementById("apellidos").value,
                direccion: document.getElementById("direccion").value,
                celular: document.getElementById("celular").value,
                nombrepizza: document.getElementById("nombrepizza").value,
                pizza:{
                    pizza: ingredientesPizza,
                    precio: costeTotalPizza
        
                }
            }
            dispatch(updateDataAdmin(datosCompra))
            LimpiarDatos() 
        }
        return (
            <div className='container card-detalles'>
                
                <div className="card-detalles__infopizza">
                <h2 >Ingredientes de la pizza</h2>
                {
                    !ingredientesPizza ? ingredientesPizza.map((pizza) => {
                        <h5 key={pizza.id}>{pizza.coste} {pizza.coste}</h5>})
                    : ingredientesPizza.map((pizza) => (
                        <p key={pizza.id}>{pizza.title} <span>{pizza.coste}</span></p>
                         
                    ))
                }
                <p className='total' >total = {costeTotalPizza}</p>
                </div>
                
                <div className="card-detalles__infouser">
                    <form  >
                        <p>Datos del Cliente</p>
                        <div>
                            <label >Nombre de la pizza</label>
                            <input id="nombrepizza" type="text" autoComplete="off"/>
                        </div>
                        <div>
                            <label >Nombres</label>
                            <input id="nombres" type="text" autoComplete="off"/>
                        </div>
                        <div>
                            <label >apellidos</label>
                            <input id="apellidos"type="text" autoComplete="off"/>
                        </div>
                        <div>
                            
                            <label >Direccion</label>
                            <input type="text" id="direccion" autoComplete="off"/>
                        </div>
                        <div>
                            
                        <label >celular</label>
                        <input type="text" id="celular" autoComplete="off"/>
                        </div>

                        
                    </form>
                    <button type="button" onClick={(() => handlePizza())}>Comprar pizza</button>
                </div>
                
                
            </div>
          )
        }

    }

  

export default CardDetalles
