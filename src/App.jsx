import { Routes, Route, Link } from "react-router-dom";
import TeachXLanding from "./pages/TeachXsite";

import { ApiProvider } from "./ApiContext.jsx";

export default function App() {


  return (
    
    <div className="min-h-screen flex flex-col bg-gray-100">
     
     <Routes>
  <Route path="/" element={<TeachXLanding />} />
  

</Routes>


    </div>
  );
}
