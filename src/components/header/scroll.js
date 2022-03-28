import { useEffect, useState } from 'react';
import { throttle } from 'lodash';
/**
 * @function useDocumentScrollThrottled
 * @param callback -referencing the window
 * @return Updates the current scroll height of then window on scroll.
 */
function useDocumentScrollThrottled(callback) {
  const [, setScrollPosition] = useState(0);
  //the initial header position on page load
  let previousScrollTop = 0;
  /**
   * Updates the windows scroll position to the current one on scroll.
   */
  function handleDocumentScroll() {
    const { scrollTop: currentScrollTop } = document.documentElement || document.body;

    setScrollPosition(previousPosition => {
      previousScrollTop = previousPosition;
      return currentScrollTop;
    });

    callback({ previousScrollTop, currentScrollTop });
  }

  const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 250);

  useEffect(() => {
    window.addEventListener('scroll', handleDocumentScrollThrottled);

    return () =>
      window.removeEventListener('scroll', handleDocumentScrollThrottled);
  }, []);
}
//export the component
export default useDocumentScrollThrottled; 