// 스타일 확정 전, 레이아웃 작성을 위한 임시 요소들
// Todo: 스타일 확정 후 바꿀것! (by kynel)

/** @jsxImportSource @emotion/react */

import { css, jsx, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import zIndex from 'styles/zIndex';
import media from 'styles/media';

import { scrollYMoveProps, displayControllerProps } from 'ts/types';

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
  ${media.tablet`
    padding: 20px 6% 0px 
  `}
  width: 100%;
  top: 0px;
  box-sizing: border-box;
  a {
    font-size: max(2vw, 1.2rem);
    font-weight: bold;
    margin-left: 1em;
    color: white;
    ${mouseHoverTransition}
    cursor: pointer;
    transition: all 0.1s;
  }
`;

// styped components
export const TempLogo = styled.div`
  height: auto;
  margin-right: auto;
  max-width: 142px;
  font-size: min(5vw, 2.5rem);
  font-weight: bold;
  color: white;
  cursor: pointer;
  ${mouseHoverTransition}
`;

export const DisplayController = styled.div<displayControllerProps>`
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
  ${media.tablet`
    left: 50%;
  `}
  width: 68px;
  height: 68px;
  animation: 0.5s ease 0s 3 normal none running ${jump};
  background-color: white;
  z-index: ${zIndex.scrollInstruction};
  touch-action: none;
`;

export const AppDownloadButton = styled.button<displayControllerProps>`
  position: fixed;
  z-index: ${zIndex.appDownloadButton};
  display: ${(props) => (props.show ? 'inline-block' : 'none')};
  width: 200px;
  height: 200px;
  top: 70vh;
  transform: translateY(
      ${(props: { show: boolean }) => (props.show ? '0px' : '-60vh')}
    )
    scale(${(props: { show: boolean }) => (props.show ? '1' : '0.7')});
  right: 3%;
  ${media.desktop`
    display: inline-block;
  `}

  background-color: white;
  transition: all 0.7s ease 0s;
  cursor: pointer;
  touch-action: none;
`;

export const LogoWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  margin-left: 1rem;
`;
