import React from "react";
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";



function App() {
  return (
   <>
     <BrowserRouter>
       <Routes>
         <Route path='/' Component={Home}></Route>
         <Route path='/contact' Component={Contact}></Route>
       </Routes>
     </BrowserRouter>
   </>
  );
}

export default App;




