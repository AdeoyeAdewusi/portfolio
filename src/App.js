import './App.scss';
import Home from './page/home';
import { Cursor, Top, Nav, } from './components';
import PulsebotLogo from './components/anims/PulseBotLogo';

function App() {

  return (
    <div>
      <Nav/>
        <Home/>
<Cursor/>
      <Top/>
      
    </div>

    
  )
}

export default App;
