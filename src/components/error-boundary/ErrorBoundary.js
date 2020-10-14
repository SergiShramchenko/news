import React from 'react';

import ExplanationMessage from '../explanation-message';

import './errorBoundary.scss';

export default ({ error, reason: { message, img }, children }) =>
  error ? <ExplanationMessage message={message} img={img} /> : children;
