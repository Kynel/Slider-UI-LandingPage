/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import Image from 'next/image';

import { css, jsx, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import pages from 'defines/pages';
import media from 'styles/media';

import downloadAppstore from 'assets/img/download-appstore.svg';
import downloadPlaystore from 'assets/img/download-playstore.svg';

export const footer = css`
  width: 100%;
  height: 100%;
  background-color: #232323;
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
    font-size: 1em;
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
  }
`;

const LandingFooter = () => {
  return (
    <footer css={[footer]}>
      <div css={[appDownloadInfo]}>
        <h2>All Users have their own place, FAV</h2>
        <div css={[appDownloadImageWrapper]}>
          <p>
            FAV는 당신의 상황에 맞는 공간을
            <br />
            재밌고 유용하게 이용할 수 있도록 도와줍니다.
          </p>
          <p>지금 설치하여 당신의 취향을 이용해보세요.</p>
        </div>
        <Link href="/">
          <div css={[appDownloadImage]}>
            <Image src={downloadPlaystore} />
          </div>
        </Link>
        <Link href="/">
          <div css={[appDownloadImage]}>
            <Image src={downloadAppstore} />
          </div>
        </Link>
      </div>
      <div css={[corpInfo]}>
        <Link href={pages.privacyPolicy}>
          <a target="_blank">개인정보 취급방침 |</a>
        </Link>
        <Link href={pages.termsOfService}>
          <a target="_blank">이용약관 |</a>
        </Link>
        <Link href={pages.locationBasedTermsOfService}>
          <a target="_blank">위치정보 이용약관</a>
        </Link>
        <div />
        <small>사업자 등록번호 : 288-81-02136</small>
        <small>Contact : paeng@pkbroz.com</small>
        <div />
        <small>ⓒ Broz Corp. All rights reserved.</small>
        <div />
      </div>
    </footer>
  );
};

export default LandingFooter;
