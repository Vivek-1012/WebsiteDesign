import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer.jsx"
import Contact from "./components/Contact.jsx"
import Services from "./components/Services.jsx"

import "./styles/services.scss"
import"./styles/App.scss";
import"./styles/Header.scss";
import './styles/App.scss' 
import './styles/Header.scss'
import './styles/home.scss'
import './styles/footer.scss'
import './styles/Contact.scss'
import './styles/mediaqueries.scss'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/services" element={<Services />} />
         
            </Routes>
            <Footer />
    </Router>
  ); 
}

export default App;
