import React from 'react';
import { Icon, Segment } from 'semantic-ui-react';

import './footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <Segment inverted textAlign="center" size="small">
        <span className="footer-text">
          Bookshelfs are fun!
        </span>
      </Segment>
    </div>
  );
}
