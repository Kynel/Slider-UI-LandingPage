## 해당 폴더의 구조는 다음과 같습니다.

- assets/logo: static assets (img, logo, icon)


- components: 각 Next page에서 사용할 컴포넌트
  - common: header, footer
  - docs: 약관 관련 컴포넌트
  - indexPage: indexPage의 presenter, container 컴포넌트와 사용될 스타일 정의


- defines: static하게 사용될 정의(pages 경로)


- hooks: 재사용 될 훅
  - useScrollDirection: 페이지의 스크롤, 터치 이벤트를 감지하기 위한 훅. SSR로 처리되는 Next의 특징에 맞추어 예외처리를 강화함.
  - useWindowSize: 페이지가 리사이즈 됨에 따라, 콜백을 호출하거나 현재 창의 사이즈를 Ref로 return함.


- styles: static하게 사용될 스타일 정의(global, fonts...)


- ts: 타입 스크립트의 interface, type 정의
