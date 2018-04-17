import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

export default decl({
  block: 'Card',
  elem: 'Title',

  content({ title }) {
    return (
      <Fragment>
        <div className="Card-TitleText">
          {title}
        </div>
      </Fragment>
    );
  }
});
