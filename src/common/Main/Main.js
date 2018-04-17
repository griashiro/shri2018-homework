import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Card from 'b:Card m:size=s|m|l m:noImage'

import { data } from '../../data'

export default decl({
  block: 'Main',

  content() {
    return (
      <Fragment>
        {data.map((cardData, index) => {
          return <Card data={cardData} key={index} />
        })}
      </Fragment>
    );
  }
});
