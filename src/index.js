import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import UserProfile from './components/user_profile';
import UserProfilePublic from './components/user_profile_public';
import Impact from './components/impact';
import App from './components/app';
import Network from './components/network';
import Follow from './components/follow';
import Followers from './components/followers';
import Footer from './components/footer';
import VolunteerForm from './components/volunteer_form';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

import RequireAuth from './components/auth/require_auth';

import Feature from './components/feature';
import Start from './components/start';
import Welcome from './components/welcome';

import VolunteerRecord from './components/volunteer_record';

import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

store.subscribe(() => {
  console.log(store.getState());
});

const token = localStorage.getItem('token');
if (token) {
  store.dispatch({ type: AUTH_USER });
}

 ReactDOM.render(
  <Provider store={store}>
    <Router >
      <div>
        <Route path="/" component={App} />
        <Route exact path="/" component={Welcome} />
        <Route path="/signin" component={Signin} />
        <Route path="/feature" component={RequireAuth(Feature)} />
        <Route path="/start" component={RequireAuth(Start)} />
        <Route path="/signout" component={Signout} />
        <Route path="/signup" component={Signup} />
        <Route path="/volunteer" component={RequireAuth(VolunteerForm)} />
        <Route path="/my-impact" component={RequireAuth(Impact)} />
        <Route path="/volunteering-success" component={VolunteerRecord} />
        <Route path="/network" component={RequireAuth(Network)} />
        <Route path="/follow" component={RequireAuth(Follow)} />
         <Route path="/followers" component={RequireAuth(Followers)} />
        <Route path="/user/:username" component={UserProfilePublic} />
        <Route path="/" component={Footer} />
  

      </div>
    </Router>
  </Provider>,
  document.querySelector('.container')
);




 ReactDOMServer.renderToString(
  <Provider store={store}>
    <Router >
      <div>
        <Route path="/" component={App} />
        <Route exact path="/" component={Welcome} />
        <Route path="/signin" component={Signin} />
        <Route path="/feature" component={RequireAuth(Feature)} />
        <Route path="/start" component={RequireAuth(Start)} />
        <Route path="/signout" component={Signout} />
        <Route path="/signup" component={Signup} />
        <Route path="/volunteer" component={RequireAuth(VolunteerForm)} />
        <Route path="/my-impact" component={RequireAuth(Impact)} />
        <Route path="/volunteering-success" component={VolunteerRecord} />
        <Route path="/network" component={RequireAuth(Network)} />
        <Route path="/follow" component={RequireAuth(Follow)} />
         <Route path="/followers" component={RequireAuth(Followers)} />
        <Route path="/user/:username" component={UserProfilePublic} />
        <Route path="/" component={Footer} />
  

      </div>
    </Router>
  </Provider>,
  document.querySelector('.container')
);




