import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Title from 'e:Title';
import Image from 'e:Image';
import Description from 'e:Description';
import Pane from 'e:Pane';

export default decl({
  block: 'Card',

  mods({ data }) {
    const mods = {}
    mods['size'] = data.size

    const noImage = !Boolean(data.image)
    if (noImage) {
      mods['noImage'] = true
    }

    return mods
  },

  content({ data }) {
    const hasImage = Boolean(data.image)
    const hasDescription = Boolean(data.description)

    return (
      <Fragment className="FooBarBaz">
        <Title title={data.title} />
        {hasImage ? (
          <Image image={data.image} size={data.size} />
        ) : null}
        <div className="Card-Content">
          {hasDescription ? (
            <Description description={data.description} />
          ) : null}
          <Pane channel={data.channelName} />
        </div>
      </Fragment>
    );
  }
});
