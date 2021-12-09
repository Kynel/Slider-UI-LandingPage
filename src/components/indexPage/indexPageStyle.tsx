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
  touch-action: none;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const SectionWrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: #202020;
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
  display: flex;
  flex-direction: column;
  padding: 22% 6% 0px;
  ${media.tablet`
    padding: 10% 6% 0px; 
  `}
  ${media.desktop`
    padding: 6% 6% 0px; 
  `}
  position: relative;
  box-sizing: border-box;
  z-index: ${zIndex.landingContent};
  overflow-y: hidden;
  touch-action: none;
`;

export const mainHeader = css`
  display: block;
  width: 100%;
  height: auto;
  ${media.desktop`
    margin-top: 5vh;
  `}
  font-weight: bold;
  font-size: 10vh;
  line-height: 1.5;
  letter-spacing: -0.05em;
  color: white;
`;

export const sectionHeader = css`
  display: block;
  width: 100%;
  margin-top: 1vh;
  margin-bottom: 2vh;
  font-weight: bold;
  font-size: 5vh;
  line-height: 1.3;
  color: white;
`;

export const sectionPragraph = css`
  display: block;
  width: 100%;
  margin-bottom: 1vh;
  font-weight: bold;
  font-size: 2.1vh;
  line-height: 1.2;
  color: white;
  white-space: pre-line;
  word-break: keep-all;
`;

export const sectionImageWrapper = css`
  width: 100%;
  height: 60%;
  ${media.tablet`
    height: 70%;
  `}
  display: flex;
  justify-content: center;
  ${media.desktop`
    justify-content: flex-start;
  `}
  align-items: center;
  margin-top: 4vh;
  margin-bottom: 4vh;
`;

export const sectionImage = css`
  width: 100%;
  ${media.desktop`
    width: 35%;
  `}
  height: 110%;
  position: relative;
`;
export const sectionImageSpacing = css`
  margin-right: 3%;
  ${media.tablet`
    margin-right: 0;
  `}
`;
