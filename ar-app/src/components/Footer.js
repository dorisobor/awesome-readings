import React, { Component } from 'react';
import { CardFooter} from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <CardFooter className="footer">Awesome Readings copyright © 2018
        </CardFooter>

      </div>
    );
  }
}
export default Footer;