import React from 'react'
import './App.css'
import About from "./components/About.tsx";
import Hero from "./components/Hero.tsx";
import Skills from "./components/Skills.tsx";
import Details from "./components/Details.tsx";
import Footer from "./components/Footer.tsx";

const App: React.FunctionComponent = () => {
    return (
        <>
            <div>
                <Hero/>
            </div>
            <div className="mb-3 py-5 bg-light">
                <About/>
            </div>
            <div className="my-5">
                <Skills/>
            </div>
            <div className="" style={{background: "linear-gradient(to right, #8e2de2, #4a00e0)"}}>
                <Details/>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}

export default App
