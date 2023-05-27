import type { MantineThemeOverride } from '@mantine/core';

const theme: MantineThemeOverride = {
  globalStyles: (theme) => ({
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },
    a: {
      textDecoration: 'none',
      color: 'black',
    },
    ul: {
      listStyle: 'none',
    },
    '::-webkit-scrollbar': {
      width: '5px',
      height: '5px',
    },
    '::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      backgroundColor: '#888',
    },

    '::-webkit-scrollbar-track': {
      backgroundColor: '#f8f8f8',
    },
  }),
  colorScheme: 'light',
  colors: {
    dark: [
      '#d5d7e0',
      '#acaebf',
      '#8c8fa3',
      '#666980',
      '#4d4f66',
      '#34354a',
      '#2b2c3d',
      '#1d1e30',
      '#0c0d21',
      '#01010a',
    ],
  },
  spacing: {
    xs: '0.625rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
  },
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
};

export default theme;
