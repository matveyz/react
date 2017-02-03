import React, { Component } from 'react';

import './Contact.css';

class Contact extends Component {
  render() {
    return (
        <div>
          <h2>If you have some questions?</h2>
          <p id="head">You can contact us from different sources like skype, e-mail, phone-number.We are always have the answers on all your questions:
          </p>
          <ul>
            <li>Skype: spacenterRelax</li>
            <li>E-Mail: spacenterrelax@gmail.com</li>
            <li>Phone-Number: 877-427-5776</li>
          </ul>
          <p id="regards">With best regards SPA center "Relax" &reg;</p>
        </div>
    );
  }
}

export default Contact;
