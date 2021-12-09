export interface Size {
  width: number | undefined;
  height: number | undefined;
}

export interface Image {
  alt: string;
  src: string;
}

export interface SectionData {
  background?: Image;
  animationClass?: string;
  className?: string;
  title?: string[];
  description?: string[];
  subscription?: string[];
  sectionId: string;
  isShowAppDownload: boolean;
  isShowNavigation: boolean;
  isShowPagination: boolean;
  isShowRecruitment: boolean;
  isShowScrollIcon: boolean;
}
