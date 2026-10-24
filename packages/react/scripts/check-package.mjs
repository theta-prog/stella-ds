import assert from 'node:assert/strict';
import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Button } from '../dist/index.js';

assert.match(renderToStaticMarkup(React.createElement(Button, null, 'Package smoke')), /Package smoke/);
console.log('Native ESM import and React server rendering passed.');
