import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./screens/Home"
import About from "./screens/About"
import Contact from "./screens/Contact"

const App= () =>  {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
