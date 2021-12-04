/** @jsxImportSource @emotion/react */
import Link from 'next/link';

import { css, jsx, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import pages from 'defines/pages';
import media from 'styles/media';

export const footer = css`
  width: 100%;
  height: 100%;
  background-color: #233332;
  color: white;
  text-align: center;
  font-size: 1rem;
  ${media.tablet`
  font-size: 1.2rem`}
  ${media.desktop`
  font-size: 1.4rem`}
  transition: all 0.1s;
`;

const appDownloadInfo = css`
  padding-top: 20vh;
  h2 {
    margin-bottom: 1em;
    font-size: 1.3em;
    font-weight: bold;
  }
  p {
    font-size: 1.1.em;
    color: #6c757d;
  }
`;
const appDownloadImageWrapper = css`
  margin-bottom: 1.4em;
`;
const appDownloadImage = css`
  display: block;
  width: 240px;
  height: auto;
  margin: 0px auto;
  margin-bottom: 0.6em;
`;

const corpInfo = css`
  margin-top: 15vh;
  padding: 0 11%;
  small {
    display: block;
    font-size: 0.7em;
    line-height: 1.7;
  }
  div {
    margin-top: 1em;
  }
  a {
    font-size: 0.6em;
    margin-right: 0.2em;
    text-decoration: underline;
  }
`;

const LandingFooter = () => {
  return (
    <footer css={[footer]}>
      <div css={[appDownloadInfo]}>
        <h2>모바일 큐레이션 가이드 - FAV</h2>
        <div css={[appDownloadImageWrapper]}>
          <p>FAV는 당신의 여행을 실시간으로 도와드립니다.</p>
          <p>어디갈지 고민되신다면 당장 설치하세요</p>
        </div>
        <Link href="/">
          <img
            css={[appDownloadImage]}
            src="https://triple-corp.com/static/images/btn-m-googleplay@2x.png"
          />
        </Link>
        <Link href="/">
          <img
            css={[appDownloadImage]}
            src="https://triple-corp.com/static/images/btn-m-appstore@2x.png"
          />
        </Link>
      </div>
      <div css={[corpInfo]}>
        <small>ⓒTriple Corp. All rights reserved</small>
        <small>사업자번호 581-87-00266</small>
        <small>통신판매업신고번호 2017-성남분당-0275</small>
        <div />
        <small>
          (주)BROZ는 통신판매중개자로서 통신판매의 당사자가 아니며 상품 거래정보
          및 거래등에 대해 책임을 지지 않습니다.
        </small>
        <div />
        <Link href={pages.termsOfService}>
          <a target="_blank">이용약관,</a>
        </Link>
        <Link href={pages.privacyPolicy}>
          <a target="_blank">개인정보 취급방침,</a>
        </Link>
        <Link href={pages.locationBasedTermsOfService}>
          <a target="_blank">위치정보 이용약관</a>
        </Link>
      </div>
    </footer>
  );
};

export default LandingFooter;
