
import './App.css';
import Home from './components/Home'
import { Provider } from 'react-redux'
 import Store from './store'

function App() {

  return (
    <Provider store = { Store }>
  <div className="container text-center">
    <Home/>
  </div>
  </Provider>


  );
}

export default App;
