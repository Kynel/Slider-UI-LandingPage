import Link from 'next/link';

import {
  landingNav,
  TempLogo,
  AppDownloadButton,
  ScrollInstruction,
  DisplayController,
} from 'components/common/tempStyle';
import pages from 'defines/pages';

import { SectionData } from 'ts/interfaces';

const LandingNav = ({
  scrollYMove,
  currentSection,
  sectionData,
}: {
  scrollYMove: string;
  currentSection: { current: number };
  sectionData: SectionData[];
}) => {
  console.log(sectionData[currentSection.current].isShowScrollIcon);
  return (
    <>
      <nav css={[landingNav]}>
        <Link href={pages.home}>
          <TempLogo>BROZ</TempLogo>
        </Link>
        <DisplayController
          show={sectionData[currentSection.current].isShowNavigation}
        >
          <Link href="/">
            <a>회사소개</a>
          </Link>
          <Link href="/">
            <a>아웃소싱</a>
          </Link>
          <Link href="/">
            <a>팀 소개</a>
          </Link>
        </DisplayController>
      </nav>
      <AppDownloadButton scrollYMove={scrollYMove} />
      <DisplayController
        show={sectionData[currentSection.current].isShowScrollIcon}
      >
        <ScrollInstruction />
      </DisplayController>
    </>
  );
};

export default LandingNav;
