import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

export default decl({
  block: 'Card',
  elem: 'Pane',

  content({ channel }) {
    const hasChannel = Boolean(channel)

    return (
      <Fragment>
        {hasChannel ? (
          <div className="Card-Channel">
            {channel}
          </div>
        ): null}
        <div className="Card-Dots">
          <svg>
            <use xlinkHref="#s-dots" />
          </svg>
        </div>
        <div className="Card-Heart">
          <svg>
            <use xlinkHref="#s-heart" />
          </svg>
        </div>
      </Fragment>
    );
  }
});
