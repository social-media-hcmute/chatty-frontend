import { useCallback, useEffect } from 'react';

const useInfiniteScroll = (bodyRef, bottomLineRef, callback) => {
  const handleScroll = useCallback(() => {
    const containerHeight = bodyRef?.current?.getBoundingClientRect().height;
    const bottomLineTop = bottomLineRef?.current?.getBoundingClientRect().top;

    if (bottomLineTop <= containerHeight) {
      callback();
    }
  }, [bodyRef, bottomLineRef, callback]);

  useEffect(() => {
    const bodyRefCurrent = bodyRef?.current;
    if (!bodyRefCurrent) return;

    bodyRefCurrent.addEventListener('scroll', handleScroll, true);

    return () => {
      bodyRefCurrent.removeEventListener('scroll', handleScroll, true);
    };
  }, [bodyRef, handleScroll]);

  return null;
};

export default useInfiniteScroll;
