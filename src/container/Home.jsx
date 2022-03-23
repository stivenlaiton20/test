import React, {useState, useRef, useEffect}from 'react'
import {HiMenu} from 'react-icons/hi'
import {AiFillCloseCircle} from 'react-icons/ai'
import { Link, Route, Routes } from 'react-router-dom';
import {Sidebar} from '../components/sidebar/Sidebar'

const Home = () => {
  return (
    <div className="container">
        <Sidebar/>
    </div>
  )
}

export default Home