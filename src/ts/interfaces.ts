export interface Size {
  width: number | undefined;
  height: number | undefined;
}

export interface Image {
  alt: String;
  src: String;
}

export interface SectionData {
  background?: Image;
  animationClass?: String;
  className?: String;
  title?: Image;
  description?: String[];
  subscription?: String[];
  sectionId: String;
  isShowAppDownload: Boolean;
  isShowNavigation: Boolean;
  isShowPagination: Boolean;
  isShowRecruitment: Boolean;
  isShowScrollIcon: Boolean;
}
