import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

export default decl({
  block: 'Card',
  elem: 'Description',

  content({ description }) {
    return (
      <Fragment>
        <div className="Card-Gradient" />
        {description}
      </Fragment>
    );
  }
});
