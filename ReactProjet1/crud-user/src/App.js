
import './App.css';
import {BrowserRouter, Switch, Route } from "react-router-dom" ; 
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <div style={{ maxWidth:"30rem", margin:"4rem auto"}}>
    {/* mettre la navigation  */}
    
    <GlobalProvider> 
      <BrowserRouter>
      <Switch> 
     
        <Route path="/" exact component={Home} />
        <Route path="/add" exact component={AddUser} />
        <Route path="/edit/:id"  exact component={EditUser} />
      </Switch>
      </BrowserRouter>
      
      </GlobalProvider>
    </div>
     
  );
}

export default App;
