import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  

  return (
    <div id="app-container">
      
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/services' element={<Services />}/>
        </Routes>
      </Main>
      <Footer />
    </div>
  )
}

export default App
