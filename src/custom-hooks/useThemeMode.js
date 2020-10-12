import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from '../redux/ui/ui.actions';

export default () => {
  const theme = useSelector((state) => state.ui.themeMode);
  const dispatch = useDispatch();
  const changeThemeMode = (event) => {
    if (
      event.type === 'click' ||
      (event.type === 'keypress' && event.key === 'Enter')
    )
      dispatch(uiActions.changeThemeMode());
  };

  const nightMode = 'night';
  const themeMode = theme === nightMode;

  return { changeThemeMode, themeMode };
};
