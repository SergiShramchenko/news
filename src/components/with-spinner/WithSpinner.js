import React from 'react';
import Spinner from '../spinner';

export default ({ loading, children }) => (loading ? <Spinner /> : children);
