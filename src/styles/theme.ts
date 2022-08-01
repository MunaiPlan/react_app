const breakpoints = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tabletS: '768px',
  tabletL: '1112px',
  laptopS: '1366px',
  laptopM: '1440px',
  desktop: '1680px',
};

const colors = {
  background: '#FFF',
  text: '#363537',
};

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

const fontSizes = {
  text: [16],
  heading: [18, 20, 24, 28, 48, 64],
};

const letterSpacings = {
  normal: 'normal',
  caps: '0.25rem',
};

const lineHeights = [1, 1, 125, 1, 25, 1, 5];

const fontWeights = {
  lighter: 300,
  light: 400,
  normal: 500,
  bold: 700,
};

const shadows = [`0 1px 2px 0 ${colors.background}`, `0 1px 4px 0 ${colors.background}`];

const fontFamily = ["'Helvetica Neue', Arial, Helvetica, sans-serif"];

const baseTheme = {
  breakpoints,
  colors,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  shadows,
  space,
  fontFamily,
};

export const lightTheme = {
  ...baseTheme,
};

export const darkTheme = {
  ...baseTheme,
  colors: {
    background: '#363537',
    text: '#FFF',
  },
};
