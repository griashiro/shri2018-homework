import React from 'react';
import { decl } from 'bem-react-core';

export default decl({
  block: 'Header',

  content() {
    return (
      <picture>
        <source media="(min-width: 1200px)" srcset="img/zen_logo@3x.png" />
        <img src="img/zen_logo@3x.png" alt="Логотип Дзен" />
      </picture>
    );
  }
});
