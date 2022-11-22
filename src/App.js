import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Heading from "./components/Heading"
import Home from "./components/home"
import Foot from "./components/Foot"
import Contact from "./components/Contact"
import Services from "./components/Services"

import "./styles/header.scss"
import "./styles/App.scss"
import "./styles/home.scss";
import "./styles/foot.scss";
import "./styles/contact.scss";
import "./styles/services.scss";
import "./styles/mediaquery.scss"


function App() {
  return (

      
    <Router>
      <Heading/>
      <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/contact" element={<Contact/>}></Route>
       <Route path="/services" element={<Services/>}></Route>
      </Routes>
    <Foot/>
    </Router>
    
  );
}

export default App;
