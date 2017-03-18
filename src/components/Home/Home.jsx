import React, { PropTypes, Component } from 'react';

import styles from './Home.css';

class App extends Component {
  render() {
    return (
        <div>
          <h2>Hello everyone who visit this page!</h2>
          <p>SPA - Sanum Per Aqua or Health trough water. Sometimes you need to deeply relax, away from your worries and your bussy schedule. You need warm water, relaxing massage, nice athmosphere, quiet music, silence... relax.

            If you are looking for a best SPA center, you are at the right place. We have carefully selected every of our methodics for relaxing and for emotions what you whould be have from our SPA center "Relax"</p>

          <p id="regards">With best regards SPA center "Relax" &reg;</p>
        </div>
    );
  }
}

export default App;