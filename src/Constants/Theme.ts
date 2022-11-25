import {
  ComponentStyleConfig,
  extendTheme,
  type ThemeConfig,
} from '@chakra-ui/react'

// commons config
const colors = {
  gray: {
    50: '#CBCBCB',
    100: '#515151',
    '100.5': '#51515180',
    200: '#7f7f7f',
    '200.5': '#EFEFEF',
  },
  warning: {
    100: '#DA2729',
    200: '#AB2426',
  },
  red: {
    '100.5': '#FF0000',
  },
}

const fonts = {
  vin5261_light: 'VIN5261-Light, sans-serif',
  vin5261: 'VIN5261-Regular, sans-serif',
  vin5261_italic: 'VIN5261-RegularItalic, sans-serif',
  vin5261_bold: 'VIN5261-Bold, sans-serif',
  vin5261_bold_italic: 'VIN5261-BoldItalic, sans-serif',
  body: 'VIN5261-Regular, sans-serif',
  heading: 'VIN5261-Regular, sans-serif',
}

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  ipad: '1025px',
  ipad_landscape: '1337px',
  '2xl': '96em',
}

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// component config
const components: { [key: string]: ComponentStyleConfig } = {
  Badge: {
    variants: {
      'solid-white': {
        textTransform: 'capitalize',
        bg: 'white',
        px: 2.5,
        py: 0.5,
        color: 'black',
        fontFamily: 'vin5261',
        fontSize: 'sm',
        fontWeight: 'normal',
        borderRadius: 'md',
      },
      'solid-notification': {
        textTransform: 'capitalize',
        bg: 'red.100.5',
        w: '19px',
        h: '19px',
        p: 0.5,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'vin5261',
        fontSize: 'xs',
        fontWeight: 'bold',
        borderRadius: 'full',
      },
      'un-active': {
        textTransform: 'capitalize',
        bg: 'transparent',
        px: 2.5,
        py: 0.5,
        color: 'white',
        fontFamily: 'vin5261',
        fontSize: 'sm',
        fontWeight: 'normal',
        borderRadius: 'md',
      },
    },
  },
  Heading: {
    variants: {
      h1: {
        textTransform: 'uppercase',
        color: 'white',
        letterSpacing: '0.16em',
        fontSize: { base: '20px', md: '35px' },
        fontWeight: 'normal',
        lineHeight: { base: '36px', md: '46px' },
        maxW: '614px',
      },
      h2: {
        textTransform: 'uppercase',
        color: 'white',
        letterSpacing: '0.16em',
        fontWeight: 'bold',
        fontSize: { base: '26px', md: '27px' },
        lineHeight: { base: '46px', md: '46px' },
      },
      h3: {
        textTransform: 'uppercase',
        color: 'white',
        letterSpacing: '0.16em',
        fontSize: '2xl', //24px
        fontWeight: 'normal',
        fontFamily: 'vin5261',
        lineHeight: '36px',
      },
      h4: {
        fontSize: '21px',
        lineHeight: { base: '31px', md: '31px' },
        fontWeight: 'normal',
      },
    },
  },
  Text: {
    variants: {
      h3: {
        fontSize: { base: 'xl', md: '2xl' }, //24px
        fontWeight: 'normal',
        fontFamily: 'vin5261',
        lineHeight: { base: '30px', md: '36px' },
        color: 'white',
      },
      'h3-limitedW': {
        fontSize: { base: 'xl', md: '2xl' }, //24px
        fontWeight: 'normal',
        fontFamily: 'vin5261',
        lineHeight: '36px',
        color: 'white',
        maxW: '614px',
      },
      'normal-text': {
        fontSize: { base: 'md', md: 'md' }, //16px
        fontWeight: 'normal',
        fontFamily: 'vin5261',
        lineHeight: '15px',
        color: 'white',
      },
    },
  },
}

// final theme
export default extendTheme({
  config,
  colors,
  fonts,
  breakpoints,
  components,
})
