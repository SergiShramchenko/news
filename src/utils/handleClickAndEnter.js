export default (e) => {
  if (e.type === 'click' || (e.type === 'keypress' && e.key === 'Enter')) {
    return true;
  }
  return false;
};
