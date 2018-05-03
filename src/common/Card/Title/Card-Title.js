import React from 'react';
import { decl, Bem } from 'bem-react-core';

export default decl({
  block: 'Card',
  elem: 'Title',

  content({ title }) {
    return (
        <Bem elem="TitleText">
          {title}
        </Bem>
    );
  }
});
