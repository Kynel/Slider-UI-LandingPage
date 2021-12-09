import Link from 'next/link';
import Image from 'next/image';
import pages from 'defines/pages';

import {
  landingNav,
  TempLogo,
  AppDownloadButton,
  ScrollInstruction,
  DisplayController,
  LogoWrapper,
} from 'components/common/tempStyle';

import { SectionData } from 'ts/interfaces';

import logoBroz from 'assets/logo/logo-broz.svg';
import logoOutsourcing from 'assets/logo/logo-outsourcing.svg';
import logoTeam from 'assets/logo/logo-team.svg';

const LandingNav = ({
  scrollYMove,
  currentSection,
  sectionData,
}: {
  scrollYMove: string;
  currentSection: { current: number };
  sectionData: SectionData[];
}) => {
  return (
    <>
      <nav css={[landingNav]}>
        <Link href={pages.home}>
          <TempLogo>BROZ</TempLogo>
        </Link>
        <Link href={pages.corporate}>
          {sectionData[currentSection.current].isShowNavigation ? (
            <a>회사소개</a>
          ) : (
            <LogoWrapper>
              <Image src={logoBroz} />
            </LogoWrapper>
          )}
        </Link>

        <Link href={pages.si}>
          {sectionData[currentSection.current].isShowNavigation ? (
            <a>아웃소싱</a>
          ) : (
            <LogoWrapper>
              <Image src={logoOutsourcing} />
            </LogoWrapper>
          )}
        </Link>
        <Link href="/">
          {sectionData[currentSection.current].isShowNavigation ? (
            <a>팀 소개</a>
          ) : (
            <LogoWrapper>
              <Image src={logoTeam} />
            </LogoWrapper>
          )}
        </Link>
      </nav>
      <AppDownloadButton
        show={sectionData[currentSection.current].isShowAppDownload}
      />
      <DisplayController
        show={sectionData[currentSection.current].isShowScrollIcon}
      >
        <ScrollInstruction />
      </DisplayController>
    </>
  );
};

export default LandingNav;
