// Todo: type checking을 너무 느슨하게 함... 추후 수정 (by Kynel)
/** @jsxImportSource @emotion/react */

import { css, jsx } from '@emotion/react';

const sizes = {
  uhd: 1980,
  widescreen: 1366,
  desktop: 1024,
  tablet: 768,
};

export default Object.keys(sizes).reduce((acc: any, label: string): any => {
  acc[label] = (...args: any) => css`
    @media (min-width: ${(sizes as any)[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
