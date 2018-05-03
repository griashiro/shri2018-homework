import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import Title from 'e:Title';
import Image from 'e:Image';
import Description from 'e:Description';
import Pane from 'e:Pane';

export default decl({
  block: 'Card',

  mods({ data }) {
    return {
      size: data.size,
      noImage: !data.image
    }
  },

  content({ data }) {
    return (
      <Fragment className="FooBarBaz">
        <Title title={data.title} />
        {data.image ? (
          <Image image={data.image} size={data.size} />
        ) : null}
        <Bem elem="Content">
          {data.description ? (
            <Description description={data.description} />
          ) : null}
          <Pane channel={data.channelName} />
        </Bem>
      </Fragment>
    );
  }
});
