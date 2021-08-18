import React from 'react';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
// import Nav from './component/Nav/Nav';
// import Footer from './component/Footer/Footer';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return (
      <Router>
		{/* <Nav /> */}
        <Switch>
            <Route exact path="/" component={Login} />
            {/* <Route exact path="/signup" component={Signup}/> */}
            <Route exact path="/main" component={Main} />
        </Switch>
		{/* <Footer /> */}
      </Router>
    )
  }
}

export default Routes;