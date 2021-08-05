import './App.css';
import Header from './Header';
import Main from './Main';
import About from './About';
import Users from './Users';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import UserId from './UserId';
import Error from './Error';


function App() {
  return (
   <>
         <Header />
       

        <Router>
           <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/about" component={About} />
              <Route exact path="/users" component={Users} />
              <Route path="/users/:userName" component={UserId} />
               <Route component={Error} />
           </Switch>
        </Router>

   </>
  );
}

export default App;
