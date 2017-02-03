import React, { Component } from 'react';

import './Stuff.css';

class Stuff extends Component {
  render() {
    return (
        <div>
            <h2>Stuff Information</h2>
            <p id="head">In other spa you can find different <b>Methodics</b>:</p>
            <ol>
                <li>Performance Massage</li>
                <li>Master Therapy Massage</li>
                <li>Aromatherapy Massage</li>
                <li>Reflexology</li>
                <li>Stone Therapy Massage</li>
                <li>Thai Massage</li>
                <li>Pre-Natal and Post-Natal Massage</li>
                <li>Regenerative Massage</li>
                <li>Body Scrub</li>
                <li>Caudalie Crushed Cabernet Scrub</li>
            </ol>
            <p id="regards">With best regards SPA center "Relax" &reg;</p>
        </div>
     );
	}
  }


export default Stuff;