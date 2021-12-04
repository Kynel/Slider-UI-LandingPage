// emotion을 사용하기 위해서는, 아래의 주석이 반드시 필요
// 툴들을 사용해 babel setting을 바꾸면 안써도 되지만, 안정성에 문제가 생길 수 있어 일단 보류
/** @jsxImportSource @emotion/react */

import { css, jsx, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { scrollYMoveProps, backgroundProps } from 'ts/types';
import zIndex from 'styles/zIndex';
import media from 'styles/media';

// wrapper
export const SlideWrapper = styled.div<scrollYMoveProps>`
  height: ${(props) => props.windowHeight}px;
  width: 100vw;
  position: fixed;
  transform: translateY(${(props) => props.scrollYMove});
  transition: transform 0.7s ease 0s;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  user-select: none;
  touch-action: none;
`;

export const SectionWrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: rgb(42, 193, 188);
  overflow: hidden;
`;

// css element
const zoomIn = keyframes`
0% {
  transform: scale(1.3, 1.3);
}
100% {
  transform: scale(1, 1);
}
`;
export const SectionBackground = styled.div<backgroundProps>`
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  background-color: rgb(42, 193, 188);
  /* background-image: ${(props) => props.backgroundImage}; */
  background-image: url(https://www.baemin.com/_next/static/images/main_03@2x.jpg);
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  animation: ${zoomIn} 1s normal 1;
  z-index: ${zIndex.landingImage};
`;

export const sectionContent = css`
  width: 100%;
  height: 100%;
  padding: 28% 6% 0px;
  position: relative;
  box-sizing: border-box;
  z-index: ${zIndex.landingContent};
`;

export const mainHeader = css`
  display: block;
  width: 100%;
  height: auto;
  font-weight: bold;
  font-size: 20vw;
  line-height: 1.2;
  letter-spacing: -0.05em;
  color: white;
  ${media.tablet`
  font-size: 10vw;
  `}
`;
