import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from '../redux/ui/ui.actions';
import { uiSelectors } from '../redux/ui/ui.selectors';

export default () => {
  const themeMode = useSelector(uiSelectors.themeMode);
  const dispatch = useDispatch();

  const changeThemeMode = (event) => {
    if (
      event.type === 'click' ||
      (event.type === 'keypress' && event.key === 'Enter')
    )
      dispatch(uiActions.changeThemeMode());
  };

  return { changeThemeMode, themeMode };
};
