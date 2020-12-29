import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home'
import BookIndex from './components/BookIndex'
import BookForm from './components/BookForm'
import Nav from './components/Nav'
import BookShow from './components/BookShow'
import Bookshelf from './components/Bookshelf'

function App() {
  return (
    // <div className="App">
      <div className="theme-invert">
          <div class="container-fluid">
            <div class="overlay">
            <Router>
              <Nav />
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/books" component={BookIndex}/>
                <Route exact path="/books/new" component={BookForm}/>
                <Route exact path="/books/bookshelf" component={Bookshelf}/>
                <Route path="/books/:id/edit" component={BookForm}/>
                <Route path="/books/:id" component={BookShow}/>
              </Switch>
            </Router>
            </div>
          </div>
      </div>

  );
}

export default App;
