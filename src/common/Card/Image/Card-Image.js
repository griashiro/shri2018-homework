import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

export default decl({
  block: 'Card',
  elem: 'Image',

  IMAGE_SIZES: {
    s: [112, 224, 336],
    m: [172, 344, 516],
    l: [232, 464, 696]
  },

  getSrcSet (image, size) {
    const name = image.split('.')[0]
    const ext = image.split('.')[1]
    const sizes = this.IMAGE_SIZES[size]

    return `${name}.${ext} ${sizes[0]}w,` +
      ` ${name}@2x.${ext} ${sizes[1]}w,` +
      ` ${name}@3x.${ext} ${sizes[2]}w`
  },

  content({ image, size }) {
    return (
      <Fragment>
        <img src={image}
             srcset={this.getSrcSet(image, size)}
             sizes="(max-width: 650px) 50vw, 100vw" alt="Изображение для карточки" />
      </Fragment>
    );
  }
});
