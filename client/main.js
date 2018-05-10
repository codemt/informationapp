import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import App from '../imports/ui/App.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RegisterForm from '../imports/ui/registerform';
import ClientList from '../imports/ui/clientlist';
import Lost from '../imports/ui/Lost';
injectTapEventPlugin();
Meteor.startup(() => {
  render((

    <Router>
            <Switch>
                    <Route intial exact path="/" component={App} />
                    <Route exact path="/userform" component={RegisterForm} />
                    <Route exact path="/clientlist" component={ClientList} />
                    <Route component={Lost} />
            </Switch>
    </Router>                                                



),document.getElementById('render-target'));

});