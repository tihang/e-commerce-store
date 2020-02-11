import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss';
import { store, persistor } from './redux/store';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Nav from './containers/Nav';
import Register from './pages/Register';
import Collections from './pages/Collections';
import Cart from './pages/Cart';


// optional cofiguration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.FADE
};

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <AlertProvider template={AlertTemplate} {...options}>
            <Router>
              <Nav />
              <div className="content-area">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/login-register" component={Login} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route path="/collections" component={Collections} />
                  <Route exact path="/cart" component={Cart} />
                </Switch>
              </div>
            </Router>
          </AlertProvider>
        </div>
      </PersistGate>
    </Provider>
  );
}
