import {createGlobalStyle} from 'styled-components'

import SharpSansDispNo2Book from '../fonts/sharp_sans_no2_book-webfont.woff'
import SharpSansDispNo2Book2 from '../fonts/sharp_sans_no2_book-webfont.woff2'
import SharpSansDispNo2Bold from '../fonts/sharp_sans_no2_bold-webfont.woff'
import SharpSansDispNo2Bold2 from '../fonts/sharp_sans_no2_bold-webfont.woff2'
import SharpSansDispNo2SemiBold from '../fonts/sharp_sans_no2_semibold-webfont.woff'
import SharpSansDispNo2SemiBold2 from '../fonts/sharp_sans_no2_semibold-webfont.woff2'
import sharpsansdispno2 from '../fonts/sharpsansdispno2-book-webfont.woff'
import sharpsansdispno2B from '../fonts/sharpsansdispno2-book-webfont.woff2'

import arquitecta from '../fonts/arquitecta-webfont.woff'
import arquitecta2 from '../fonts/arquitecta-webfont.woff2'
import arquitectablack from '../fonts/arquitectablack-webfont.woff'
import arquitectablack2 from '../fonts/arquitectablack-webfont.woff2'
import arquitectaheavy from '../fonts/arquitectaheavy-webfont.woff'
import arquitectaheavy2 from '../fonts/arquitectaheavy-webfont.woff2'
import arquitectamedium from '../fonts/arquitectamedium-webfont.woff'
import arquitectamedium2 from '../fonts/arquitectamedium-webfont.woff2'

const GlobalStyle = createGlobalStyle`
    html{
        font-size: 56.25%;
    }

    body{
        -webkit-font-smoothing: antialiased;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 1.6rem;
    }

    @font-face {
        font-family: 'sharp_sans_no2_book';
        src: url('${sharpsansdispno2}') format('woff')
            url('${sharpsansdispno2B}') format('woff2');
        font-weight: 400;
        font-style: normal;
    }

   @font-face {
        font-family: 'sharp_sans';
        src: url('${SharpSansDispNo2Book}') format('woff'),
            url('${SharpSansDispNo2Book2}') format('woff2');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'sharp_sans';
        src: url("${SharpSansDispNo2Bold2}") format('woff2'),
            url("${SharpSansDispNo2Bold}") format('woff');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'sharp_sans';
        src: url("${SharpSansDispNo2SemiBold2}") format('woff2'),
            url("${SharpSansDispNo2SemiBold}") format('woff');
        font-weight: 600;
        font-style: normal;
    }


    @font-face {
        font-family: 'architecta';
        src: url("${arquitecta}") format('woff2'),
            url("${arquitecta2}") format('woff');
        font-weight: 200;
        font-style: normal;
    }

    @font-face {
        font-family: 'architecta';
        src: url("${arquitectamedium}") format('woff2'),
            url("${arquitectamedium2}") format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'arquitecta';
        src: url("${arquitectablack}") format('woff2'),
            url("${arquitectablack2}") format('woff');
        font-weight: 600;
        font-style: normal;
    }


    @font-face {
        font-family: 'arquitecta';
        src: url("${arquitectaheavy}") format('woff2'),
            url("${arquitectaheavy2}") format('woff');
        font-weight: 800;
        font-style: normal;
    }
`

export const theme = {
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
  fontWeight: {
    hairline: '100',
    thin: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
}

export default GlobalStyle
