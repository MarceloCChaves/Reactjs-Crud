import Create from "./components/create";
import Read from './components/read';
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import "./styles/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <h2 className="main-header">Estoque de produtos</h2>
      <div>
        <Routes>
          <Route path='/' element={<Create />} />
          <Route path='/read' element={<Read/>} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
