import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import moonLogo from '../../assets/svg/theme/moon.svg';

import './themeSwitcher.scss';

const ThemeSwitcher = ({ changeThemeMode, themeMode }) => (
  <div
    className='theme'
    onClick={changeThemeMode}
    onKeyPress={changeThemeMode}
    tabIndex='0'
  >
    <img
      className={classNames('theme__mode', { mode: themeMode })}
      src={moonLogo}
      alt='moon'
      title='color theme'
    />
  </div>
);

ThemeSwitcher.propTypes = {
  changeThemeMode: PropTypes.func.isRequired,
  themeMode: PropTypes.bool.isRequired,
};

export default ThemeSwitcher;
