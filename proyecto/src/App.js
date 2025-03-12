import {BrowserRouter} from 'react-router-dom'
import { Rutas } from './routes';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Rutas/>
    </BrowserRouter>
    </div>
  );
}

export default App;
