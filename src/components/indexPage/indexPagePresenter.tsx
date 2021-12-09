import Image from 'next/image';
import { SectionData } from 'ts/interfaces';

import LandingFooter from 'components/common/landingFooter';
import {
  SlideWrapper,
  SectionWrapper,
  sectionContent,
  SectionBackground,
  mainHeader,
  sectionHeader,
  sectionPragraph,
  sectionImageWrapper,
  sectionImage,
  sectionImageSpacing,
} from 'components/indexPage/indexPageStyle';
import Slide from 'components/slide/slide';

// section 이미지
import prototype1 from 'assets/img/prototype-1.webp';
import prototype2 from 'assets/img/prototype-2.webp';
import prototype3 from 'assets/img/prototype-3.webp';
import prototype4 from 'assets/img/prototype-4.webp';
import arPrototype1 from 'assets/img/ar-prototype-1.webp';
import arPrototype2 from 'assets/img/ar-prototype-2.webp';
import arPrototype3 from 'assets/img/ar-prototype-3.webp';
import arPrototype4 from 'assets/img/ar-prototype-4.webp';

const IndexPagePresenter = ({
  onSlideTransitionEnd,
  scrollYMove,
  sectionData,
  windowHeight,
}: {
  onSlideTransitionEnd: Function;
  scrollYMove: string;
  sectionData: SectionData[];
  windowHeight: number;
}) => {
  return (
    <SlideWrapper scrollYMove={scrollYMove} windowHeight={windowHeight}>
      <SectionWrapper>
        <SectionBackground />
        <main css={[sectionContent]}>
          <h1 css={[mainHeader]}>
            공간을
            <br />나 답게
          </h1>
        </main>
      </SectionWrapper>
      <SectionWrapper>
        <div css={[sectionContent]}>
          <div css={[sectionImageWrapper]}>
            <div css={[sectionImage, sectionImageSpacing]}>
              <Image
                src={prototype1}
                layout="fill"
                objectFit="contain"
                placeholder="blur"
              />
            </div>
            <div css={[sectionImage]}>
              <Image
                src={prototype2}
                layout="fill"
                objectFit="contain"
                placeholder="blur"
              />
            </div>
          </div>
          <h2 css={[sectionHeader]}>트렌드 공간 추천</h2>
          <p css={[sectionPragraph]}>요즘 핫한 트렌드 공간을 모아서 한 눈에!</p>
          <p css={[sectionPragraph]}>
            내 취향에 맞는 FAV 트렌드 공간을 추천받아보세요
          </p>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div css={[sectionContent]}>
          <h2 css={[sectionHeader]}>내 취향 공간 찾기</h2>
          <p css={[sectionPragraph]}>
            "연남동 가려고 하는데 뭐먹으러 가지?" 고민되신다구요?
          </p>
          <p css={[sectionPragraph]}>
            카테고리 별 큐레이션을 통해 핫 플레이스에서 내 취향에 맞는 공간을
            쉽게 골라보세요
          </p>
          <div css={[sectionImageWrapper]}>
            <div css={[sectionImage, sectionImageSpacing]}>
              <Image
                src={prototype3}
                layout="fill"
                objectFit="contain"
                placeholder="blur"
              />
            </div>
            <div css={[sectionImage]}>
              <Image
                src={prototype4}
                layout="fill"
                objectFit="contain"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div css={[sectionContent]}>
          <h2 css={[sectionHeader]}>내 경험 증강하기</h2>
          <p css={[sectionPragraph]}>
            그냥 가면 재미 없죠~ 쏠쏠한 재미들과 유용한 정보들, 프로모션
            쿠폰까지
          </p>
          <p css={[sectionPragraph]}>
            공간을 찾아가는길, 일상의 발걸음에서 증강현실 컨텐츠를 즐겨보세요!
          </p>
          <Slide>
            <Image
              src={arPrototype1}
              layout="fill"
              objectFit="contain"
              placeholder="blur"
              priority
            />
            <Image
              src={arPrototype2}
              layout="fill"
              objectFit="contain"
              placeholder="blur"
            />
            <Image
              src={arPrototype3}
              layout="fill"
              objectFit="contain"
              placeholder="blur"
            />
            <Image
              src={arPrototype4}
              layout="fill"
              objectFit="contain"
              placeholder="blur"
            />
          </Slide>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <LandingFooter />
      </SectionWrapper>
    </SlideWrapper>
  );
};

export default IndexPagePresenter;
