
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";

import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail"
import DentistContext from "./Components/utils/global.context";

function App() {
  return (
      <BrowserRouter>
        <DentistContext>
          <Routes>
              <Route path="/" element= {<Home/>}/>
              <Route path="/Contact" element={<Contact/>}/>
              <Route path="/Favs" element={<Favs/>}/>
              <Route path="/Detail/:id" element={<Detail/>}/>
              <Route path="*" element={<h1>404 not found</h1>} />
          </Routes>
        </DentistContext>
      </BrowserRouter>
  )
}

export default App;
