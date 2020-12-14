import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home'
import BookIndex from './components/BookIndex'
import BookForm from './components/BookForm'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/books" component={BookIndex}/>
          <Route path="/books/new" component={BookForm}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
