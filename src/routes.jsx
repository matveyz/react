import React from 'react';
import { IndexRoute, Route }  from 'react-router';
import App from 'components/App';
import Stuff from 'components/Stuff';
import Home from 'components/Home';
import Contact from 'components/Contact';
import FourOhFour from 'components/FourOhFour';

export default (
  <Route component={App} path='/'>
      <IndexRoute component={Home} />
      <Route path="stuff" component={Stuff} />
      <Route path="contact" component={Contact} />
      <Route path="*" component={FourOhFour} />
  </Route>
);