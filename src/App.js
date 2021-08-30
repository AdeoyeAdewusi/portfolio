import './App.scss';
import Home from './page/home';
import { Cursor, Top, Nav, } from './components';
import { BrowserRouter, Route} from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter>
      <Route>
      <Nav/>
        <Home/>
<Cursor/>
      <Top/>
      </Route>
      </BrowserRouter>
      
    </div>

    
  )
}

export default App;
