import React from 'react'
import { Route, Routes } from "react-router";
import Home from "../Components/Pages/Home";
import About from '../Components/Pages/About';

const Contact = (params) => {
    return <h1>Contact Component Renderer</h1>
}

export default function AppRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}

