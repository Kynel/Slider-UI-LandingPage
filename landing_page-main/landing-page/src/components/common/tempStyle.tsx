// 스타일 확정 전, 레이아웃 작성을 위한 임시 요소들
// Todo: 스타일 확정 후 바꿀것! (by kynel)

/** @jsxImportSource @emotion/react */

import { css, jsx, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import zIndex from 'styles/zIndex';
import media from 'styles/media';

import { scrollYMoveProps, DisplayControllerProps } from 'ts/types';

// styles
const mouseHoverTransition = css`
  :hover {
    transform: scale(1.1);
  }
  transform: scale(1);
  transition: all 0.1s;
`;

export const landingNav = css`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: ${zIndex.landingNav};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 6% 0px 6%;
  width: 100%;
  top: 0px;
  box-sizing: border-box;
  a {
    font-size: max(2vw, 1.2rem);
    font-weight: bold;
    margin-left: 1em;
    color: white;
    opacity: 0%;
    ${media.tablet`
      opacity: 100%;
    `}
    ${mouseHoverTransition}
    cursor: pointer;
    transition: all 0.1s;
  }
`;

// styped components
export const TempLogo = styled.div`
  width: 28%;
  height: auto;
  margin-right: auto;
  max-width: 142px;
  font-size: max(5vw, 2rem);
  font-weight: bold;
  color: white;
  cursor: pointer;
  ${mouseHoverTransition}
`;

export const DisplayController = styled.div<DisplayControllerProps>`
  opacity: ${(props) => (props.show ? '100%' : '0%')};
  transition: all 0.2s;
`;

const jump = keyframes`
0%{
  transform: translateY(0px);
}
40%{
  transform: translateY(-30px);
}
50%{
  transform: translateY(0px);
}
60%{
  transform: translateY(-15px);
}
100%{
  transform: translateY(0px);
}
`;
export const ScrollInstruction = styled.figure`
  position: fixed;
  bottom: 3%;
  left: 6%;
  width: 68px;
  height: 68px;
  animation: 0.5s ease 0s 3 normal none running ${jump};
  background-color: white;
  z-index: ${zIndex.scrollInstruction};
`;

export const AppDownloadButton = styled.button<scrollYMoveProps>`
  position: fixed;
  z-index: ${zIndex.appDownloadButton};
  display: inline-block;
  bottom: 0px;
  right: 0px;
  width: 229px;
  height: 300px;
  background-color: white;
  transform: translateY(${(props) => props.scrollYMove});
  transition: transform 0.7s ease 0s;
  cursor: pointer;
`;
