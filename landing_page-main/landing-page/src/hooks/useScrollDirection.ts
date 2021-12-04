import { useEffect, useState } from 'react';
import { EffectCallback } from 'react';
import _ from 'lodash';

function useScrollDirection(onScrollUp: Function, onScrollDown: Function) {
  if (typeof window === 'undefined') return undefined;
  const onWheel = (event: any) => {
    if (event.deltaY > 0) {
      onScrollUp();
    } else {
      onScrollDown();
    }
  };

  const touchStartOffset = { x: 0, y: 0 };
  const onTouchStart = (event: any) => {
    event.preventDefault();
    touchStartOffset.x = event.touches[0].pageX;
    touchStartOffset.y = event.touches[0].pageY;
  };
  const onTouchMove = (event: any) => {
    event.preventDefault();
    const offset = { x: 0, y: 0 };
    offset.x = touchStartOffset.x - event.touches[0].pageX;
    offset.y = touchStartOffset.y - event.touches[0].pageY;
    if (offset.y > 0) {
      onScrollUp();
    } else {
      onScrollDown();
    }
  };

  // Todo: 빠른 디버깅을 위해 빠르게 스크롤되게 만듬 추후 1000정도로 수정 (by Kynel)
  const throttleMs = 200;
  const onWheelThrottled = _.throttle(onWheel, throttleMs, {
    leading: true,
    trailing: false,
  });
  const onTouchStartThrottled = _.throttle(onTouchStart, throttleMs, {
    leading: true,
    trailing: false,
  });
  const onTouchMoveThrottled = _.throttle(onTouchMove, throttleMs, {
    leading: true,
    trailing: false,
  });

  useEffect(() => {
    window.addEventListener('wheel', onWheelThrottled);
    window.addEventListener('touchstart', onTouchStartThrottled);
    window.addEventListener('touchmove', onTouchMoveThrottled);
    return () => {
      window.removeEventListener('wheel', onWheelThrottled);
      window.removeEventListener('touchstart', onTouchStartThrottled);
      window.removeEventListener('touchmove', onTouchMoveThrottled);
    };
  }, []);
}

export default useScrollDirection;
