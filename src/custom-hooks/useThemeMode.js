import store from 'store';
import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from '../redux/ui/ui.actions';
import { uiSelectors } from '../redux/ui/ui.selectors';

import handleClickAndEnter from '../utils/handleClickAndEnter';

export default () => {
  const themeMode = useSelector(uiSelectors.themeMode);
  const dispatch = useDispatch();

  const changeThemeMode = (e) => {
    if (handleClickAndEnter(e)) {
      dispatch(uiActions.changeThemeMode());
      store.set('themeMode', !themeMode);
    }
  };

  return { changeThemeMode, themeMode };
};
