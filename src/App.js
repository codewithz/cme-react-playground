import { UseCaseOneComponent } from './components/UseCaseOne/UseCaseOneComponent';
import './App.css';
import UseCaseTwoComponent from './components/UseCaseTwo/UseCaseTwoComponent';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Navbar from './components/RoutingApp/Navbar';
import Products from './components/RoutingApp/Products';
import Posts from './components/RoutingApp/Posts';
import Dashboard from './components/RoutingApp/admin/Dashboard';
import Home from './components/RoutingApp/Home';
import ProductDetails from './components/RoutingApp/ProductDetails';
import NotFound from './components/RoutingApp/NotFound';
import Counter from './components/UseEffectExample/Counter';
import PostComponent from './components/HttpExample/PostComponent';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" render={(props) => <Products sortBy='newest' {...props} />} />
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/counter" component={Counter} />
            <Route path="/http-posts" component={PostComponent} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>


      </div>
    </BrowserRouter>
  );
}

export default App;
