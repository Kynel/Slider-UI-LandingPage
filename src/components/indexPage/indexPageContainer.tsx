import { useEffect, useState, useRef } from 'react';

import useScrollDirection from 'hooks/useScrollDirection';
import useWindowSize from 'hooks/useWindowSize';
import { Size, SectionData } from 'ts/interfaces';

import LandingNav from 'components/common/landingNav';
import IndexPagePresenter from 'components/indexPage/indexPagePresenter';

// 인덱스 페이지에 필요한 정보들을 로드/선언하고 하위 컴포넌트에 props로 뿌려줌
const IndexPageContainer = ({}) => {
  // 필요한 정보들 목업으로 설정
  // 트랜지션 종료시, 팝업 / 추가적인 애니메이션 실행
  const onSlideTransitionEnd: Function = () => {};
  // 윈도우 사이즈 측정
  const onResize = (windowSize: { current: Size }) => {
    setScrollYMove(
      windowSize.current.height
        ? `-${currentSection.current * windowSize.current.height}px`
        : '0px'
    );
  };
  const windowSize: { current: Size } = useWindowSize(onResize);
  const currentSection: { current: number } = useRef(0);
  // 스크롤, 터치드래그 이벤트
  const onScrollUp = () => {
    if (currentSection.current === sectionData.length - 1) return;
    currentSection.current += 1;
    setScrollYMove(
      windowSize.current.height
        ? `-${currentSection.current * windowSize.current.height}px`
        : '0px'
    );
    // console.log(currentSection);
  };
  const onScrollDown = () => {
    if (currentSection.current === 0) return;
    currentSection.current -= 1;
    setScrollYMove(
      windowSize.current.height
        ? `-${currentSection.current * windowSize.current.height}px`
        : '0px'
    );
    // console.log(currentSection);
  };
  // 스크롤 이벤트 윈도우 객체에 등록
  useScrollDirection(onScrollUp, onScrollDown);

  // 이 수치만큼 transition
  const [scrollYMove, setScrollYMove]: [string, Function] = useState('0px');
  const sectionData: SectionData[] = [
    {
      background: {
        alt: '',
        src: 'https://www.baemin.com/_next/static/images/main_03@2x.jpg',
      },
      description: ['공간을', '나 답게'],
      isShowAppDownload: true,
      isShowNavigation: true,
      isShowPagination: false,
      isShowRecruitment: true,
      isShowScrollIcon: true,
      sectionId: 'landing',
    },
    {
      animationClass: 'section1_animation',
      className: 'section1_className',
      sectionId: 'section1_id',
      title: { alt: '', src: '' },
      description: [
        '3천만 이상이 선택한 FAV',
        '업계 최다 큐레이션 장소 보유 중!',
      ],
      subscription: ['(2021 12월 기준)'],
      isShowAppDownload: true,
      isShowNavigation: false,
      isShowPagination: true,
      isShowRecruitment: false,
      isShowScrollIcon: true,
    },
    {
      animationClass: 'section1_animation',
      className: 'section1_className',
      title: { alt: '', src: '' },
      description: [
        '3천만 이상이 선택한 FAV',
        '업계 최다 큐레이션 장소 보유 중!',
      ],
      subscription: ['(2021 12월 기준)'],
      isShowAppDownload: true,
      isShowNavigation: false,
      isShowPagination: true,
      isShowRecruitment: false,
      isShowScrollIcon: true,
      sectionId: 'section1_id',
    },
    {
      isShowAppDownload: true,
      isShowNavigation: true,
      isShowPagination: false,
      isShowRecruitment: true,
      isShowScrollIcon: false,
      sectionId: 'footer',
    },
  ];

  // index페이지의 구성 요소

  return (
    <>
      <LandingNav
        scrollYMove={scrollYMove}
        currentSection={currentSection}
        sectionData={sectionData}
      />
      <IndexPagePresenter
        onSlideTransitionEnd={onSlideTransitionEnd}
        scrollYMove={scrollYMove}
        sectionData={sectionData}
        windowHeight={windowSize.current.height || 0}
      />
    </>
  );
};

export default IndexPageContainer;
