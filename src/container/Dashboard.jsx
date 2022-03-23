import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataAdmin, updateDataAdmin } from '../feutures/DataAdminSlice/dataAdminSlice'

const Dashboard = () => {
    const { dataAdmin } = useSelector(state => state.dataAdmin)
    let datos = dataAdmin
    

  return (
    
    <div className='container'>
        <h2>TABLA DE PIZZAS VENDIDAS</h2>
        <div>
            <div className="num__total">
            <p>{dataAdmin.length}</p>
            </div>
            
        </div>
        <div className="datos__user">
            <div className="tabla">
                    <table >
                    <thead>
                        <tr>
                        <th>nombre</th>
                        <th>apellidos</th>
                        <th>direccion</th>
                        <th>celular</th>
                        <th>pizza ordenada</th>
                        </tr>


                    </thead>
                    
                    
                    {datos.map((dato, index) => (
                        <tbody >
                        <tr>
                            <td key={index}>{dato.nombres} </td>
                            <td key={index}>{dato.apellidos} </td>
                            <td key={index}>{dato.direccion} </td>
                            <td key={index}>{dato.celular} </td>
                    
                            <td key={index}>{dato.nombrepizza} </td>

                        </tr>
                        </tbody>
                    ))} 
                    </table>
                </div>    
        </div>
    </div>


        
  )
}

export default Dashboard