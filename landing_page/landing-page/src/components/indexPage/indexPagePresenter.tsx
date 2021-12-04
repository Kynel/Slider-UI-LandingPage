import { SectionData } from 'ts/interfaces';

import LandingFooter from 'components/common/landingFooter';
import {
  SlideWrapper,
  SectionWrapper,
  sectionContent,
  SectionBackground,
  mainHeader,
} from 'components/indexPage/indexPageStyle';

// test
import { useEffect } from 'react';

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
        <div css={[sectionContent]}>2</div>
      </SectionWrapper>
      <SectionWrapper>
        <div css={[sectionContent]}>3</div>
      </SectionWrapper>
      <SectionWrapper>
        <LandingFooter />
      </SectionWrapper>
    </SlideWrapper>
  );
};

export default IndexPagePresenter;
