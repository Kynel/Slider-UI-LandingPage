import { css, Global } from '@emotion/react';
import fonts from './fonts';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        /*** The new CSS Reset - version 1.4.2 (last updated 30.11.2021) ***/

        /*
    Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property
    - The "symbol *" part is to solve Firefox SVG sprite bug
 */
        *:where(:not(iframe, canvas, img, svg, video):not(svg *, symbol *)) {
          all: unset;
          display: revert;
          font-family: ${fonts.default}, sans-serif;
          font-smooth: always;
          -webkit-font-smoothing: antialiased;
        }

        /* Preferred box-sizing value */
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        /* Remove list styles (bullets/numbers) */
        ol,
        ul,
        menu {
          list-style: none;
        }

        /* For images to not be able to exceed their container */
        img {
          max-width: 100%;
        }

        /* removes spacing between cells in tables */
        table {
          border-collapse: collapse;
        }

        /* revert the 'white-space' property for textarea elements on Safari */
        textarea {
          white-space: revert;
        }

        /* revert for bug in Chromium browsers
   - fix for the content editable attribute will work properly. */
        :where([contenteditable]) {
          -moz-user-modify: read-write;
          -webkit-user-modify: read-write;
          overflow-wrap: break-word;
          -webkit-line-break: after-white-space;
        }
      `}
    />
  );
};

export default GlobalStyle;
