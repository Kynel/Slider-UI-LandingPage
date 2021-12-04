import { useRef, useEffect } from 'react';
import { Size } from 'ts/interfaces';

function useWindowSize(onResize: Function): { current: Size } {
  const windowSize = useRef<Size>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      windowSize.current = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      if (onResize) {
        onResize(windowSize);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
