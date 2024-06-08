import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from "./components/First/First";
import Second from './components/Second/Second';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First/>}/>
        <Route path="/second" element={<Second />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
