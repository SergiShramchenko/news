export default (selector) =>
  Math.abs(
    document.querySelector(selector).scrollHeight -
      document.querySelector(selector).scrollTop -
      document.querySelector(selector).clientHeight
  );
