import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import moonLogo from '../../assets/svg/theme/moon.svg';

import './themeSwitcher.scss';

const ThemeSwitcher = ({ changeThemeMode, themeMode }) => (
  <div className='theme'>
    <img
      className={classNames('theme__mode', { theme__mode_active: themeMode })}
      src={moonLogo}
      alt='moon'
      title='color theme'
      tabIndex='0'
      onClick={changeThemeMode}
      onKeyPress={changeThemeMode}
    />
  </div>
);

ThemeSwitcher.propTypes = {
  changeThemeMode: PropTypes.func.isRequired,
  themeMode: PropTypes.bool.isRequired,
};

export default ThemeSwitcher;
