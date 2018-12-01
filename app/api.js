import { api } from 'shared';

import { Constants } from 'expo';

const { manifest } = Constants;

const apiHost =
  typeof manifest.packagerOpts === `object` && manifest.packagerOpts.dev
    ? 'http://' +
      manifest.debuggerHost
        .split(`:`)
        .shift()
        .concat(`:8080`)
    : `api.example.com`;

api.config(apiHost);

export default api;
