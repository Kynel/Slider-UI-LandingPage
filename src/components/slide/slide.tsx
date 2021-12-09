import { useEffect, useState } from 'react';
import Image from 'next/image';

import leftBracket from 'assets/icon/left-angle-bracket.svg';
import rightBracket from 'assets/icon/right-angle-bracket.svg';

import {
  SlideWrapper,
  arrow,
  ImageWrapper,
  slideImage,
  on,
  off,
  arrowLeftMargin,
  arrowRightMargin,
} from 'components/slide/slide.styles';

const Slide = ({ children }: { children: JSX.Element[] }) => {
  const [currentIndex, setCurrentIndex]: [number, Function] = useState(0);
  const goNext = () => {
    setCurrentIndex((current: number) => (current + 1) % children.length);
  };
  const goPrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(() => children.length - 1);
    } else {
      setCurrentIndex((current: number) => current - 1);
    }
  };
  useEffect(() => {
    console.log(currentIndex, children.length);
  });
  return (
    <SlideWrapper>
      <div css={[arrow, arrowLeftMargin]} onClick={goPrev}>
        <Image src={leftBracket} />
      </div>
      <ImageWrapper>
        {children.map((element, index) => (
          <div
            key={`slide_image_${index}`}
            css={[currentIndex === index ? on : off, slideImage]}
          >
            {element}
          </div>
        ))}
      </ImageWrapper>
      <div css={[arrow, arrowRightMargin]} onClick={goNext}>
        <Image src={rightBracket} />
      </div>
    </SlideWrapper>
  );
};

export default Slide;
