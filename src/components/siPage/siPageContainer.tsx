import { useEffect, useState, useRef } from 'react';
import { Size, SectionData } from 'ts/interfaces';
import SIPagePresenter from './siPagePresenter';
import LandingNav from 'components/common/landingNav';

const SIPageContainer = ({}) => {
  const [scrollYMove, setScrollYMove]: [string, Function] = useState('0px');
  const currentSection: { current: number } = useRef(0);
  const sectionData: SectionData[] = [
    {
      background: {
        alt: '',
        src: 'https://www.baemin.com/_next/static/images/main_03@2x.jpg',
      },
      title: ['공간을', '나 답게'],
      isShowAppDownload: true,
      isShowNavigation: true,
      isShowPagination: false,
      isShowRecruitment: true,
      isShowScrollIcon: true,
      sectionId: 'landing',
    },
  ];

  return (
    <>
      <LandingNav
        scrollYMove={scrollYMove}
        currentSection={currentSection}
        sectionData={sectionData}
      />
      <SIPagePresenter />
    </>
  );
};

export default SIPageContainer;
