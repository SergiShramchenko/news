import React from 'react';
import classNames from 'classnames';

import useThemeMode from '../../custom-hooks/useThemeMode';

import './themeProvider.scss';

export default ({ children }) => {
  const { themeMode } = useThemeMode();

  return (
    <div
      className={classNames('theme-provider', {
        'theme-provider__mode': themeMode,
      })}
    >
      {children}
    </div>
  );
};
