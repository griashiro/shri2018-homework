import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Header from 'b:Header'
import Main from 'b:Main'

export default decl({
  block: 'App',

  renderDotsSVG () {
    return (
      <svg style={{display: 'none'}}>
        <symbol id="s-dots" viewBox="0 0 60 60">
          <g>
          	<path d="M8,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S12.411,22,8,22z"></path>
          	<path d="M52,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S56.411,22,52,22z"></path>
          	<path d="M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z"></path>
          </g>
        </symbol>
      </svg>
    )
  },

  renderHeartSVG () {
    return (
      <svg style={{display: 'none'}}>
        <symbol id="s-heart" viewBox="0 0 100 100">
          <path d="M100 34.976c0 8.434-3.635 16.019-9.423 21.274h0.048l-31.25 31.25c-3.125 3.125-6.25 6.25-9.375 6.25s-6.25-3.125-9.375-6.25l-31.202-31.25c-5.788-5.255-9.423-12.84-9.423-21.274 0-15.865 12.861-28.726 28.726-28.726 8.434 0 16.019 3.635 21.274 9.423 5.255-5.788 12.84-9.423 21.274-9.423 15.865 0 28.726 12.861 28.726 28.726z"></path>
        </symbol>
      </svg>
    )
  },

  content() {
    return (
      <Fragment>
        {this.renderDotsSVG()}
        {this.renderHeartSVG()}
        <Header />
        <Main />
      </Fragment>
    );
  }
});
