import logo from './logo.svg';
import './App.css';
import Add from './component/Add';
import List from './component/List';
import Edit from './component/Edit';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Validate from './component/Validate';


function App() {
  return (
    
    
      <div>

        <BrowserRouter>
         
          <Routes>
            // <Route path="/" element={<List />} />
            // <Route path="/add" element={<Add />} />
            // <Route path="/edit" element={<Edit />} />
            
          </Routes>
      
        </BrowserRouter>
      </div>
    
  );
}

export default App;
