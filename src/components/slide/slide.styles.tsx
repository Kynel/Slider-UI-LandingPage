/** @jsxImportSource @emotion/react */

import { css, jsx, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import media from 'styles/media';

// wrapper
export const SlideWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  ${media.desktop`
    justify-content: flex-start;
  `}
  margin-top: 5vh;
  margin-bottom: 5vh;
`;
export const ImageWrapper = styled.div`
  width: auto;
  height: auto;
  flex-grow: 1;
  ${media.desktop`
    flex-grow: 0.4;
    min-width: auto;
    margin-left: 3%;
    margin-right: 3%;
  `}
  position: relative;
  overflow: hidden;
`;
// element styles
export const arrow = css`
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  margin-top: auto;
  margin-bottom: auto;
  ${media.tablet`
    flex-shrink: 1;
    flex-grow: 0;
  `}
  transform: scale(1);
  transition: all 0.1s;
  user-select: none;
`;
export const arrowLeftMargin = css``;
export const arrowRightMargin = css``;
export const slideImage = css`
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all 0.3s;
`;
export const on = css`
  opacity: 100%;
`;
export const off = css`
  opacity: 0%;
`;
