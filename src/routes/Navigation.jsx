import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, NavLink } from 'react-router-dom'
import pizzLogo from '../assets/pizzaLogo.png'
import '../App.scss'
import Home from '../container/Home'
import Dashboard from '../container/Dashboard'

const Navigation = () => {
  return (

        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                   
                    <ul>
                    <li>
                    <NavLink to="/home" className={ ({isActive}) => isActive ? 'nav-active': "" }>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard" className={ ({isActive}) => isActive ? 'nav-active': "" }>Dashboard</NavLink>
                </li>
                <li>
                    
                    <NavLink to="/crearpizza" className={ ({isActive}) => isActive ? 'nav-active': "" }>Crear Pizza</NavLink>
                </li>
                <li>
                    <NavLink to="/nosotros" className={ ({isActive}) => isActive ? 'nav-active': "" }>Nosotros</NavLink>
                </li>

            </ul>
            </nav>
            <Routes>
                <Route path='dashboard' element={<Dashboard/>} />
                <Route path='nosotros' element={<h1>nosotros</h1>} />
                <Route path='home' element={<h1>home</h1>} />
                <Route path='crearpizza' element={<Home/>} />
                <Route path='/' element={<Home/>} />
            </Routes>
            </div>

        </BrowserRouter>

  )
}

export default Navigation

