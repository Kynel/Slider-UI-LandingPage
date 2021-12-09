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
  const onResize = (height: number) => {
    setScrollYMove(`-${currentSection.current * height}px`);
    setWindowHeight(height);
  };
  const windowSize: { current: Size } = useWindowSize(onResize);
  const [windowHeight, setWindowHeight]: [number, Function] = useState(0);
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
      title: ['공간을', '나 답게'],
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
      title: ['트렌드 공간 추천'],
      description: [
        '요즘 핫한 트렌드 공간을 모아서 한 눈에!',
        '내 취향에 맞는 FAV 트렌드 공간을 추천받아보세요',
      ],
      subscription: [],
      isShowAppDownload: false,
      isShowNavigation: false,
      isShowPagination: true,
      isShowRecruitment: false,
      isShowScrollIcon: true,
    },
    {
      animationClass: 'section2_animation',
      className: 'section2_className',
      sectionId: 'section2_id',
      title: ['내 취향 공간 찾기'],
      description: [
        '"연남동 가려고 하는데 뭐먹으러 가지?" 고민 되신다구요?',
        '카테고리 별 큐레이션을 통해 핫 플레이스에서',
        '내 취향에 맞는 공간을 쉽게 골라보세요',
      ],
      subscription: [],
      isShowAppDownload: false,
      isShowNavigation: false,
      isShowPagination: true,
      isShowRecruitment: false,
      isShowScrollIcon: true,
    },
    {
      animationClass: 'section3_animation',
      className: 'section3_className',
      sectionId: 'section3_id',
      title: ['내 경험 증강하기'],
      description: [
        '그냥 가면 재미없죠 ~ 쏠쏠한 재미들과 유용한 정보들, 프로모션 쿠폰까지',
        '공간을 찾아가는 길, 일상의 발걸음에서 증강현실 컨텐츠를 즐겨보세요!',
      ],
      subscription: [],
      isShowAppDownload: false,
      isShowNavigation: false,
      isShowPagination: true,
      isShowRecruitment: false,
      isShowScrollIcon: true,
    },
    {
      isShowAppDownload: false,
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
        windowHeight={windowHeight}
      />
    </>
  );
};

export default IndexPageContainer;
